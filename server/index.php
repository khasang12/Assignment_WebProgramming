<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

require_once 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$serverName=$_ENV['DB_SERVER'];
$username=$_ENV['DB_USER'];
$password=$_ENV['DB_PASS'];
$databaseName=$_ENV['DB_NAME'];

$conn = mysqli_connect($serverName, $username, $password, $databaseName);


$rec = "ss";
if (isset($_POST['text'])) {
    $rec = '"' . $_POST['text'] . '"';
}

$query = "INSERT INTO test(id,text) VALUES(NULL,$rec)";
if (mysqli_query($conn,$query)) {
    echo "$rec has been inserted successfully";
}
else{
    echo "$rec has not been inserted successfully";
}
