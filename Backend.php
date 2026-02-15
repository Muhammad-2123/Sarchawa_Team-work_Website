<?php
$host = "localhost";
$user = "root";      
$password = "";      
$database = "kurdish_resources";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection FAILED: " . $conn->connect_error);
}

echo "Database connected successfully!";
?>
