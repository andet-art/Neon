<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    require_once 'db_config.php';

    // Test database connection
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Check if table exists
    $tableCheck = $conn->query("SHOW TABLES LIKE 'offers'");
    
    // Create table if it doesn't exist
    if ($tableCheck->num_rows == 0) {
        $createTable = "CREATE TABLE IF NOT EXISTS offers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            featured BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($createTable)) {
            throw new Exception("Error creating table: " . $conn->error);
        }
        
        // Add sample data
        $sampleData = "INSERT INTO offers (title, description, featured) VALUES 
            ('Test Offer 1', 'This is a test offer description', false),
            ('Featured Test', 'This is a featured test offer', true)";
            
        if (!$conn->query($sampleData)) {
            throw new Exception("Error inserting sample data: " . $conn->error);
        }
    }

    echo json_encode([
        "success" => true,
        "message" => "Database connection successful",
        "debug" => [
            "php_version" => PHP_VERSION,
            "mysql_version" => $conn->server_info,
            "table_exists" => ($tableCheck->num_rows > 0),
            "mysql_error" => $conn->error,
            "current_database" => $conn->query("SELECT DATABASE()")->fetch_row()[0]
        ]
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage(),
        "debug" => [
            "file" => $e->getFile(),
            "line" => $e->getLine(),
            "trace" => $e->getTraceAsString()
        ]
    ]);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>
