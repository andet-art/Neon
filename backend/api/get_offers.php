<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

require_once 'db_config.php';

try {
    // Get all offers from the database
    $query = "SELECT * FROM offers ORDER BY created_at DESC";
    $result = $conn->query($query);
    
    if (!$result) {
        throw new Exception("Error executing query: " . $conn->error);
    }
    
    $offers = array();
    while ($row = $result->fetch_assoc()) {
        $offers[] = array(
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'featured' => (bool)$row['featured'],
            'created_at' => $row['created_at']
        );
    }
    
    // Return success response
    echo json_encode(array(
        'success' => true,
        'data' => $offers,
        'message' => 'Offers retrieved successfully'
    ));

} catch (Exception $e) {
    // Return error response
    http_response_code(500);
    echo json_encode(array(
        'success' => false,
        'message' => 'Error: ' . $e->getMessage(),
        'error' => $conn->error ?? null
    ));
}

// Close the connection
$conn->close();
?>
