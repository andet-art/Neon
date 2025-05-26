<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

require_once 'db_config.php';

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Get posted data
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['title']) || !isset($data['description'])) {
        throw new Exception("Title and description are required");
    }
    
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO offers (title, description, featured) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Error preparing statement: " . $conn->error);
    }
    
    // Set parameters and execute
    $title = $data['title'];
    $description = $data['description'];
    $featured = isset($data['featured']) ? $data['featured'] : false;
    
    $stmt->bind_param("ssi", $title, $description, $featured);
    
    if (!$stmt->execute()) {
        throw new Exception("Error executing statement: " . $stmt->error);
    }
    
    // Get the ID of the inserted offer
    $new_id = $conn->insert_id;
    
    // Return success response
    echo json_encode(array(
        'success' => true,
        'message' => 'Offer created successfully',
        'data' => array(
            'id' => $new_id,
            'title' => $title,
            'description' => $description,
            'featured' => (bool)$featured
        )
    ));

} catch (Exception $e) {
    // Return error response
    http_response_code(500);
    echo json_encode(array(
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ));
}

// Close statement and connection
if (isset($stmt)) {
    $stmt->close();
}
$conn->close();
?>
