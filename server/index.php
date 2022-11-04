<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

$serverName='sql12.freemysqlhosting.net';
$username='sql12541155';
$password='hyVHGCMqXT';
$databaseName='sql12541155';


$conn = mysqli_connect($serverName, $username, $password, $databaseName);


$rec = "";
if (isset($_POST['text'])) {
    $rec = '"' . $_POST['text'] . '"';
}

$query = "INSERT INTO test(id,text) VALUES (NULL,'" . $rec . "')";
if (mysqli_query($conn,$query)) {
    echo $rec . ' has been inserted successfully';
}
else{
    echo "$rec has not been inserted successfully";
}
?>