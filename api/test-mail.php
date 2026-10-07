<?php
// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($requestMethod === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/mailer.php';

// Verification checks
$smtpHost = $_ENV['SMTP_HOST'] ?? (defined('SMTP_HOST') ? SMTP_HOST : '');
$envLoaded = !empty($smtpHost);
$phpmailerLoaded = class_exists('PHPMailer\PHPMailer\PHPMailer');

if (!$envLoaded) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => ".env file or SMTP_HOST environment variable not loaded.",
        "checks" => [
            "env_loaded" => false,
            "phpmailer_loaded" => $phpmailerLoaded
        ]
    ]);
    exit();
}

if (!$phpmailerLoaded) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "PHPMailer class not found. Ensure composer dependencies are installed.",
        "checks" => [
            "env_loaded" => true,
            "phpmailer_loaded" => false
        ]
    ]);
    exit();
}

$recipientEmail = CLINIC_RECEIVER_EMAIL;
$recipientName = CLINIC_RECEIVER_NAME;
$subject = "🧪 Test Email - Children's Clinic Gmail SMTP";
$bodyHtml = "
<div style='font-family: Arial, sans-serif; padding: 20px; border: 1px solid #2a9d8f; border-radius: 8px;'>
    <h2 style='color: #2a9d8f;'>Children's Clinic SMTP Test</h2>
    <p>This is a test email sent from <strong>The Children's Clinic</strong> backend using <strong>PHPMailer + Gmail SMTP</strong>.</p>
    <ul>
        <li><strong>Host:</strong> " . htmlspecialchars($smtpHost) . "</li>
        <li><strong>Port:</strong> " . htmlspecialchars($_ENV['SMTP_PORT'] ?? SMTP_PORT) . "</li>
        <li><strong>Sender:</strong> " . htmlspecialchars($_ENV['SMTP_FROM_EMAIL'] ?? SMTP_FROM_EMAIL) . "</li>
        <li><strong>Timestamp:</strong> " . date('Y-m-d H:i:s') . "</li>
    </ul>
    <p style='color: #264653; font-weight: bold;'>If you received this email, Gmail SMTP configuration is working properly!</p>
</div>
";

$sendResult = sendEmail($recipientEmail, $recipientName, $subject, $bodyHtml);

if ($sendResult['success']) {
    echo json_encode([
        "success" => true,
        "message" => "Test email successfully sent via Gmail SMTP!",
        "recipient" => $recipientEmail,
        "checks" => [
            "env_loaded" => true,
            "phpmailer_loaded" => true,
            "smtp_host" => $smtpHost,
            "smtp_port" => (int)($_ENV['SMTP_PORT'] ?? SMTP_PORT),
            "tls_enabled" => true,
            "auth_enabled" => true,
            "email_delivered" => true
        ]
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Unable to send email. Check server log for detailed error details.",
        "checks" => [
            "env_loaded" => true,
            "phpmailer_loaded" => true,
            "email_delivered" => false
        ]
    ]);
}
