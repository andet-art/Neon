<?php
$db_host = "localhost";
$db_user = "root";
$db_pass = "";

try {
    // Create connection
    $conn = new mysqli($db_host, $db_user, $db_pass);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    
    // Create database if it doesn't exist
    $sql = "CREATE DATABASE IF NOT EXISTS neon_db";
    if (!$conn->query($sql)) {
        throw new Exception("Error creating database: " . $conn->error);
    }
    
    // Select the database
    $conn->select_db("neon_db");
    
    // Read and execute the SQL file
    $sql = file_get_contents(__DIR__ . '/neon_db.sql');
    
    if (!$conn->multi_query($sql)) {
        throw new Exception("Error creating tables: " . $conn->error);
    }
    
    echo "Database and tables created successfully!\n";
    
} catch (Exception $e) {
    die("Setup failed: " . $e->getMessage() . "\n");
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>
