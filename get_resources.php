<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kurdish_resources";

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$result = $conn->query("SELECT * FROM approved_resources ORDER BY id DESC");
$resources = [];
while($row = $result->fetch_assoc()){
    $resources[] = $row;
}
$conn->close();

header('Content-Type: application/json');
echo json_encode($resources);
?>