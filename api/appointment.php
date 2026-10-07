<?php
// CORS Headers for React Frontend compatibility
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method Not Allowed. Only POST requests are accepted."]);
    exit();
}

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/mailer.php';

// Read JSON input or fallback to $_POST
$inputRaw = file_get_contents('php://input');
$inputData = json_decode($inputRaw, true);

if (!is_array($inputData)) {
    $inputData = $_POST;
}

$parent_name = trim($inputData['parent_name'] ?? $inputData['parentName'] ?? '');
$child_name  = trim($inputData['child_name'] ?? $inputData['childName'] ?? '');
$email       = trim($inputData['email'] ?? '');
$phone_no    = trim($inputData['phone_no'] ?? $inputData['phone'] ?? '');
$date        = trim($inputData['date'] ?? '');
$time        = trim($inputData['time'] ?? $inputData['timeSlot'] ?? '');
$message     = trim($inputData['message'] ?? $inputData['reason'] ?? '');

// Validation
if (empty($parent_name) || empty($child_name) || empty($phone_no) || empty($date) || empty($time)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Please fill in all required fields (parent_name, child_name, phone_no, date, time)."
    ]);
    exit();
}

try {
    $pdo = getDBConnection();

    // Ensure phone_no column is VARCHAR(50) to prevent 32-bit INT clamping
    try {
        $pdo->exec("ALTER TABLE appointment MODIFY COLUMN phone_no VARCHAR(50) NOT NULL");
    } catch (Exception $e) {
        // Silently ignore if alter fails
    }

    // Auto-migrate: check if email column exists in appointment table
    try {
        $colCheck = $pdo->query("SHOW COLUMNS FROM appointment LIKE 'email'");
        if ($colCheck && !$colCheck->fetch()) {
            $pdo->exec("ALTER TABLE appointment ADD COLUMN email VARCHAR(255) NULL AFTER child_name");
        }
    } catch (Exception $e) {
        // Silently ignore if check fails
    }

    $stmt = $pdo->prepare("INSERT INTO appointment (parent_name, child_name, email, phone_no, date, time, message, created_at, updated_at) VALUES (:parent_name, :child_name, :email, :phone_no, :date, :time, :message, NOW(), NOW())");

    $stmt->execute([
        ':parent_name' => $parent_name,
        ':child_name'  => $child_name,
        ':email'       => $email,
        ':phone_no'    => $phone_no,
        ':date'        => $date,
        ':time'        => $time,
        ':message'     => $message
    ]);

    $insertedId = $pdo->lastInsertId();

    $appointmentData = [
        'parent_name' => $parent_name,
        'child_name'  => $child_name,
        'email'       => $email,
        'phone_no'    => $phone_no,
        'date'        => $date,
        'time'        => $time,
        'message'     => $message
    ];

    // 1. Send SMTP notification email to Clinic Admin
    $adminEmailResult = sendAppointmentNotificationEmail($appointmentData);

    // 2. Send SMTP confirmation email to Patient / Parent if email provided
    $patientEmailResult = ["success" => true];
    if (!empty($email)) {
        $patientEmailResult = sendPatientAppointmentConfirmationEmail($appointmentData);
    }

    echo json_encode([
        "success" => true,
        "message" => "Appointment request submitted successfully!",
        "appointment_id" => (int)$insertedId,
        "email_status" => $adminEmailResult,
        "patient_email_status" => $patientEmailResult
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Failed to save appointment: " . $e->getMessage()
    ]);
}
?>
