<?php

include_once './middleware/error/custom_error.php';

class Order{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }
}
?>