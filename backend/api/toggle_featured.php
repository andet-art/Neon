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
    
    if (!isset($data['id'])) {
        throw new Exception("Offer ID is required");
    }
    
    // First get the current featured status
    $stmt = $conn->prepare("SELECT featured FROM offers WHERE id = ?");
    if (!$stmt) {
        throw new Exception("Error preparing select statement: " . $conn->error);
    }
    
    $stmt->bind_param("i", $data['id']);
    
    if (!$stmt->execute()) {
        throw new Exception("Error executing select statement: " . $stmt->error);
    }
    
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        throw new Exception("Offer not found");
    }
    
    $row = $result->fetch_assoc();
    $current_featured = $row['featured'];
    
    // Toggle the featured status
    $stmt = $conn->prepare("UPDATE offers SET featured = ? WHERE id = ?");
    if (!$stmt) {
        throw new Exception("Error preparing update statement: " . $conn->error);
    }
    
    $new_featured = $current_featured ? 0 : 1;
    $stmt->bind_param("ii", $new_featured, $data['id']);
    
    if (!$stmt->execute()) {
        throw new Exception("Error executing update statement: " . $stmt->error);
    }
    
    // Return success response
    echo json_encode(array(
        'success' => true,
        'message' => 'Featured status toggled successfully',
        'data' => array(
            'id' => $data['id'],
            'featured' => (bool)$new_featured
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
