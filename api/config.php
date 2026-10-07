<?php
/**
 * Configuration for Database Connection & SMTP Mailer
 * The Children's Clinic Backend API
 */

// Disable displaying raw PHP errors in JSON response output (logs to error log instead)
ini_set('display_errors', '0');
error_reporting(E_ALL);

// Load Composer autoloader & environment variables from .env
$autoloadPath = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    $autoloadPath = __DIR__ . '/../../vendor/autoload.php';
}

if (file_exists($autoloadPath)) {
    require_once $autoloadPath;

    $projectRoot = file_exists(__DIR__ . '/../.env') ? realpath(__DIR__ . '/..') : realpath(__DIR__ . '/../..');
    if ($projectRoot && file_exists($projectRoot . '/.env')) {
        $dotenv = Dotenv\Dotenv::createImmutable($projectRoot);
        $dotenv->safeLoad();
    }
}

// Database Configuration (matches phpMyAdmin childrensclinic database)
define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
define('DB_NAME', $_ENV['DB_NAME'] ?? 'childrensclinic');
define('DB_USER', $_ENV['DB_USER'] ?? 'root');
define('DB_PASS', $_ENV['DB_PASS'] ?? '');
define('DB_CHARSET', $_ENV['DB_CHARSET'] ?? 'utf8mb4');

// SMTP Email Server Configuration from Environment Variables
define('SMTP_HOST', $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com');
define('SMTP_PORT', (int)($_ENV['SMTP_PORT'] ?? 587));
define('SMTP_SECURE', $_ENV['SMTP_SECURE'] ?? 'tls');
define('SMTP_AUTH', true);
define('SMTP_USER', $_ENV['SMTP_USERNAME'] ?? '');
define('SMTP_PASS', $_ENV['SMTP_PASSWORD'] ?? '');
define('SMTP_FROM_EMAIL', $_ENV['SMTP_FROM_EMAIL'] ?? ($_ENV['SMTP_USERNAME'] ?? ''));
define('SMTP_FROM_NAME', $_ENV['SMTP_FROM_NAME'] ?? "The Children's Clinic");

// Recipient Email Configuration
define('CLINIC_RECEIVER_EMAIL', $_ENV['CLINIC_RECEIVER_EMAIL'] ?? 'arulbalamurugansri@gmail.com');
define('CLINIC_RECEIVER_NAME', $_ENV['CLINIC_RECEIVER_NAME'] ?? "Dr. Haseen Fathima - The Children's Clinic");
