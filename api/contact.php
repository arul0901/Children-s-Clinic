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

$name     = trim($inputData['name'] ?? '');
$email    = trim($inputData['email'] ?? '');
$phone_no = trim($inputData['phone_no'] ?? $inputData['phone'] ?? '');
$message  = trim($inputData['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Please fill in all required fields (name, email, message)."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Please provide a valid email address."
    ]);
    exit();
}

try {
    $pdo = getDBConnection();

    $stmt = $pdo->prepare("INSERT INTO contact (name, email, phone_no, message, created_at, updated_at) VALUES (:name, :email, :phone_no, :message, NOW(), NOW())");

    $stmt->execute([
        ':name'     => $name,
        ':email'    => $email,
        ':phone_no' => $phone_no,
        ':message'  => $message
    ]);

    $insertedId = $pdo->lastInsertId();

    // Send SMTP notification email
    $emailResult = sendContactNotificationEmail([
        'name'     => $name,
        'email'    => $email,
        'phone_no' => $phone_no,
        'message'  => $message
    ]);

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully!",
        "contact_id" => (int)$insertedId,
        "email_status" => $emailResult
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Failed to save contact message: " . $e->getMessage()
    ]);
}
?>
