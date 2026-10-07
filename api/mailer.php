<?php
/**
 * PHPMailer Service for The Children's Clinic
 * Uses PHPMailer with Gmail SMTP and environment variables loaded via vlucas/phpdotenv
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Composer autoloading
$autoloadPath = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    $autoloadPath = __DIR__ . '/../../vendor/autoload.php';
}

if (file_exists($autoloadPath)) {
    require_once $autoloadPath;

    // Load environment variables from .env
    $projectRoot = file_exists(__DIR__ . '/../.env') ? realpath(__DIR__ . '/..') : realpath(__DIR__ . '/../..');
    if ($projectRoot && file_exists($projectRoot . '/.env')) {
        $dotenv = Dotenv::createImmutable($projectRoot);
        $dotenv->safeLoad();
    }
}

require_once __DIR__ . '/config.php';

/**
 * Configure and return a PHPMailer instance using Gmail SMTP and environment variables
 */
function createPHPMailerInstance(): PHPMailer {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'] ?? (defined('SMTP_HOST') ? SMTP_HOST : 'smtp.gmail.com');
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'] ?? (defined('SMTP_USER') ? SMTP_USER : '');
    $mail->Password = $_ENV['SMTP_PASSWORD'] ?? (defined('SMTP_PASS') ? SMTP_PASS : '');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) ($_ENV['SMTP_PORT'] ?? (defined('SMTP_PORT') ? SMTP_PORT : 587));
    $mail->CharSet = 'UTF-8';

    $fromEmail = $_ENV['SMTP_FROM_EMAIL'] ?? (defined('SMTP_FROM_EMAIL') ? SMTP_FROM_EMAIL : $mail->Username);
    $fromName = $_ENV['SMTP_FROM_NAME'] ?? (defined('SMTP_FROM_NAME') ? SMTP_FROM_NAME : "The Children's Clinic");

    $mail->setFrom($fromEmail, $fromName);

    return $mail;
}

/**
 * Send an email using PHPMailer with error logging
 */
function sendEmail($toEmail, $toName, $subject, $bodyHtml, $bodyText = '') {
    try {
        $mail = createPHPMailerInstance();
        $mail->addAddress($toEmail, $toName);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $bodyHtml;
        $mail->AltBody = $bodyText ?: strip_tags($bodyHtml);

        $mail->send();
        return ["success" => true];
    } catch (Exception $e) {
        // Log detailed PHPMailer error server-side without exposing credentials
        error_log("PHPMailer Exception for {$toEmail}: " . $e->getMessage());
        return [
            "success" => false,
            "error" => "Unable to send email"
        ];
    }
}

/**
 * Send Appointment Email Notification to Clinic Admin / Staff
 */
function sendAppointmentNotificationEmail($data) {
    $toEmail = defined('CLINIC_RECEIVER_EMAIL') ? CLINIC_RECEIVER_EMAIL : ($_ENV['CLINIC_RECEIVER_EMAIL'] ?? 'arulbalamurugansri@gmail.com');
    $toName  = defined('CLINIC_RECEIVER_NAME') ? CLINIC_RECEIVER_NAME : ($_ENV['CLINIC_RECEIVER_NAME'] ?? 'Dr. Haseen Fathima - The Children\'s Clinic');
    $subject = "📅 New Appointment Booking - " . htmlspecialchars($data['child_name'] ?? '');

    $emailRow = !empty($data['email']) ? "
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Email Address:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'><a href='mailto:" . htmlspecialchars($data['email']) . "' style='color: #2a9d8f; text-decoration: none; font-weight: bold;'>" . htmlspecialchars($data['email']) . "</a></td>
                </tr>" : "";

    $bodyHtml = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>
        <div style='background-color: #264653; color: #ffffff; padding: 20px; text-align: center;'>
            <h2 style='margin: 0;'>The Children's Clinic</h2>
            <p style='margin: 5px 0 0; font-size: 14px;'>New Appointment Request Received</p>
        </div>
        <div style='padding: 24px; background-color: #ffffff; color: #333333;'>
            <h3 style='color: #264653; margin-top: 0;'>Appointment Details</h3>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 40%;'>Parent / Guardian:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'>" . htmlspecialchars($data['parent_name'] ?? '') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Child's Name:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'>" . htmlspecialchars($data['child_name'] ?? '') . "</td>
                </tr>" . $emailRow . "
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Phone Number:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'><a href='tel:" . htmlspecialchars($data['phone_no'] ?? '') . "' style='color: #2a9d8f; text-decoration: none; font-weight: bold;'>" . htmlspecialchars($data['phone_no'] ?? '') . "</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Preferred Date:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #e76f51;'>" . htmlspecialchars($data['date'] ?? '') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Booking Time Slot:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #2a9d8f;'>" . htmlspecialchars($data['time'] ?? '') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; vertical-align: top;'>Reason / Notes:</td>
                    <td style='padding: 10px 0;'>" . nl2br(htmlspecialchars(($data['message'] ?? '') ?: 'N/A')) . "</td>
                </tr>
            </table>
        </div>
        <div style='background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;'>
            Submitted via The Children's Clinic Website • Krishnagiri
        </div>
    </div>";

    return sendEmail($toEmail, $toName, $subject, $bodyHtml);
}

/**
 * Send Patient Appointment Confirmation Email with Premium HTML UI
 */
function sendPatientAppointmentConfirmationEmail($data) {
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        return ["success" => true, "note" => "No valid patient email provided"];
    }

    $toEmail = $data['email'];
    $toName  = $data['parent_name'];
    $subject = "✨ Appointment Request Confirmation - The Children's Clinic";

    $bodyHtml = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    </head>
    <body style='margin: 0; padding: 0; background-color: #f4f7f6; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;'>
        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #f4f7f6; padding: 24px 0;'>
            <tr>
                <td align='center'>
                    <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);'>
                        
                        <!-- Header Banner -->
                        <tr>
                            <td style='background: linear-gradient(135deg, #264653 0%, #2a9d8f 100%); padding: 36px 28px; text-align: center; color: #ffffff;'>
                                <h1 style='margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;'>The Children's Clinic</h1>
                                <p style='margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; font-weight: 400;'>Pediatric &amp; Neonatal Healthcare • Krishnagiri</p>
                            </td>
                        </tr>

                        <!-- Hero Greeting -->
                        <tr>
                            <td style='padding: 32px 32px 16px 32px;'>
                                <h2 style='margin: 0 0 12px 0; color: #264653; font-size: 20px; font-weight: 600;'>Hello " . htmlspecialchars($data['parent_name']) . ",</h2>
                                <p style='margin: 0; color: #4a5568; font-size: 15px; line-height: 1.6;'>
                                    Thank you for scheduling a visit with <strong>The Children's Clinic</strong>. We have received your appointment booking request for <strong>" . htmlspecialchars($data['child_name']) . "</strong>.
                                </p>
                            </td>
                        </tr>

                        <!-- Appointment Summary Card -->
                        <tr>
                            <td style='padding: 0 32px 24px 32px;'>
                                <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #2a9d8f; border-radius: 8px; padding: 20px;'>
                                    <h3 style='margin: 0 0 16px 0; color: #2a9d8f; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;'>📋 Appointment Summary</h3>
                                    <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='font-size: 14px; color: #334155;'>
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; width: 42%; color: #64748b;'>Child's Name:</td>
                                            <td style='padding: 7px 0; font-weight: 700; color: #0f172a;'>" . htmlspecialchars($data['child_name']) . "</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; color: #64748b;'>Parent / Guardian:</td>
                                            <td style='padding: 7px 0; color: #334155;'>" . htmlspecialchars($data['parent_name']) . "</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; color: #64748b;'>Requested Date:</td>
                                            <td style='padding: 7px 0; font-weight: 700; color: #e76f51;'>" . htmlspecialchars($data['date']) . "</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; color: #64748b;'>Preferred Time Slot:</td>
                                            <td style='padding: 7px 0; font-weight: 700; color: #2a9d8f;'>" . htmlspecialchars($data['time']) . "</td>
                                        </tr>
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; color: #64748b;'>Contact Phone:</td>
                                            <td style='padding: 7px 0; color: #334155;'>" . htmlspecialchars($data['phone_no']) . "</td>
                                        </tr>
                                        " . (!empty($data['message']) ? "
                                        <tr>
                                            <td style='padding: 7px 0; font-weight: 600; color: #64748b; vertical-align: top;'>Reason / Visit Notes:</td>
                                            <td style='padding: 7px 0; color: #334155;'>" . nl2br(htmlspecialchars($data['message'])) . "</td>
                                        </tr>" : "") . "
                                    </table>
                                </div>
                            </td>
                        </tr>

                        <!-- Next Steps Banner -->
                        <tr>
                            <td style='padding: 0 32px 32px 32px;'>
                                <div style='background-color: #fff8f6; border: 1px dashed #e76f51; border-radius: 8px; padding: 18px; font-size: 14px; color: #7c2d12; line-height: 1.5;'>
                                    <strong style='color: #e76f51; font-size: 15px;'>📌 What Happens Next?</strong><br>
                                    Our clinic front desk will verify your requested time slot. If any schedule adjustments are required, our staff will contact you directly at <strong>" . htmlspecialchars($data['phone_no']) . "</strong>.
                                </div>
                            </td>
                        </tr>

                        <!-- Clinic Contact & Signature Footer -->
                        <tr>
                            <td style='background-color: #264653; padding: 28px 32px; text-align: center; color: #ffffff; font-size: 13px; line-height: 1.6;'>
                                <p style='margin: 0 0 6px 0; font-weight: 700; font-size: 15px; letter-spacing: 0.3px;'>Dr. Haseen Fathima</p>
                                <p style='margin: 0 0 8px 0; opacity: 0.9; font-size: 13px;'>M.D., D.N.B. (Pediatrics) | Specialist in Pediatrics &amp; Neonatology</p>
                                <p style='margin: 0 0 16px 0; opacity: 0.8;'>📍 The Children's Clinic • Krishnagiri, Tamil Nadu</p>
                                <div style='border-top: 1px solid rgba(255,255,255,0.15); padding-top: 14px;'>
                                    <p style='margin: 0; font-size: 12px; opacity: 0.6;'>This is an automated confirmation email for your appointment request.</p>
                                </div>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>";

    return sendEmail($toEmail, $toName, $subject, $bodyHtml);
}

/**
 * Send Contact Email Notification
 */
function sendContactNotificationEmail($data) {
    $toEmail = defined('CLINIC_RECEIVER_EMAIL') ? CLINIC_RECEIVER_EMAIL : ($_ENV['CLINIC_RECEIVER_EMAIL'] ?? 'arulbalamurugansri@gmail.com');
    $toName  = defined('CLINIC_RECEIVER_NAME') ? CLINIC_RECEIVER_NAME : ($_ENV['CLINIC_RECEIVER_NAME'] ?? 'Dr. Haseen Fathima - The Children\'s Clinic');
    $subject = "✉️ New Contact Message from " . htmlspecialchars($data['name'] ?? '');

    $bodyHtml = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>
        <div style='background-color: #2a9d8f; color: #ffffff; padding: 20px; text-align: center;'>
            <h2 style='margin: 0;'>The Children's Clinic</h2>
            <p style='margin: 5px 0 0; font-size: 14px;'>New Website Inquiry Received</p>
        </div>
        <div style='padding: 24px; background-color: #ffffff; color: #333333;'>
            <h3 style='color: #2a9d8f; margin-top: 0;'>Contact Information</h3>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%;'>Sender Name:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'>" . htmlspecialchars($data['name'] ?? '') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Email Address:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'><a href='mailto:" . htmlspecialchars($data['email'] ?? '') . "' style='color: #2a9d8f;'>" . htmlspecialchars($data['email'] ?? '') . "</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Phone Number:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'>" . htmlspecialchars(($data['phone_no'] ?? '') ?: 'Not Provided') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; vertical-align: top;'>Message Content:</td>
                    <td style='padding: 10px 0;'>" . nl2br(htmlspecialchars($data['message'] ?? '')) . "</td>
                </tr>
            </table>
        </div>
        <div style='background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;'>
            Submitted via The Children's Clinic Website • Contact Form
        </div>
    </div>";

    return sendEmail($toEmail, $toName, $subject, $bodyHtml);
}
