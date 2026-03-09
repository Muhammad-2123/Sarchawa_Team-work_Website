<?php
// Backend.php
$host = "localhost";
$user = "root"; // or your MySQL user
$pass = "";     // or your MySQL password
$db   = "kurdish_resources"; // replace with your DB name

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error) die("Connection failed: " . $conn->connect_error);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title   = $_POST['source_name'];
    $url     = $_POST['source_url'];
    $category= $_POST['category'];
    $email   = $_POST['owner_email'];
    $desc    = $_POST['description'];

    // Handle image upload
    $imgPath = "";
    if(isset($_FILES['logo']) && $_FILES['logo']['error'] === 0) {
        $ext = pathinfo($_FILES['logo']['name'], PATHINFO_EXTENSION);
        $newName = uniqid() . "." . $ext;
        $imgPath = "uploads/" . $newName;
        move_uploaded_file($_FILES['logo']['tmp_name'], $imgPath);
    }

    // Insert into table with correct column names
    $stmt = $conn->prepare("INSERT INTO pending_resources 
        (title, category, submitter_email, description, logo, source_url, created_at) 
        VALUES (?, ?, ?, ?, ?, ?, NOW())");

    $stmt->bind_param("ssssss", $title, $category, $email, $desc, $imgPath, $url);

    if(!$stmt->execute()) {
        echo "Error: " . $stmt->error;
    } else {
        echo "Success";
    }

    $stmt->close();
    $conn->close();
}
?>