<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log errors to a file
ini_set('log_errors', 1);
ini_set('error_log', dirname(__FILE__) . '/error.log');

$db_host = "localhost";
$db_user = "root";  // Default XAMPP MySQL username
$db_pass = "";      // Default XAMPP MySQL password
$db_name = "neon_db";

try {
    // Create connection with error reporting
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $conn = new mysqli($db_host, $db_user, $db_pass);
    
    if ($conn->connect_error) {
        error_log("Connection failed: " . $conn->connect_error);
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    
    // Create database if it doesn't exist
    if (!$conn->query("CREATE DATABASE IF NOT EXISTS $db_name")) {
        error_log("Error creating database: " . $conn->error);
        throw new Exception("Error creating database: " . $conn->error);
    }
    
    // Select the database
    if (!$conn->select_db($db_name)) {
        error_log("Error selecting database: " . $conn->error);
        throw new Exception("Error selecting database: " . $conn->error);
    }

    // Set character set
    if (!$conn->set_charset("utf8mb4")) {
        error_log("Error setting charset: " . $conn->error);
        throw new Exception("Error setting charset: " . $conn->error);
    }

    // Create offers table if it doesn't exist
    $createTable = "CREATE TABLE IF NOT EXISTS offers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    if (!$conn->query($createTable)) {
        error_log("Error creating table: " . $conn->error);
        throw new Exception("Error creating table: " . $conn->error);
    }

    error_log("Database connection successful");

} catch (Exception $e) {
    // Log error for debugging
    error_log("Database connection error: " . $e->getMessage());
    throw $e;
}
?>
