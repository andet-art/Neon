<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "your_user", "your_pass", "your_db");

$result = $conn->query("SELECT * FROM offers ORDER BY id DESC");

$offers = [];
while ($row = $result->fetch_assoc()) {
    $row['featured'] = boolval($row['featured']);
    $offers[] = $row;
}

echo json_encode($offers);
?>
