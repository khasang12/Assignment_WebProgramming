<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class User{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllUser(){
        try{
            $query = "SELECT * FROM customer";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
    public function getUser($username){
        try{
            $username = mysqli_real_escape_string($this->conn,$username);
            $query = "SELECT id,first_name,last_name,password FROM Customer WHERE username = '$username'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }
    
    public function createUser($first_name,$last_name,$phone,$email,$birthday,$username,$password,$address){
        try{
            $first_name = mysqli_real_escape_string($this->conn,$first_name);
            $last_name = mysqli_real_escape_string($this->conn,$last_name);
            $phone = mysqli_real_escape_string($this->conn,$phone);
            $email = mysqli_real_escape_string($this->conn,$email);
            $username = mysqli_real_escape_string($this->conn,$username);
            $password = mysqli_real_escape_string($this->conn,$password);
            $address = mysqli_real_escape_string($this->conn,$address);

            $query = "INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUES('$first_name','$last_name','$phone','$email','$birthday','$username','$password','$address');";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
           
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }
    public function deleteUser($id){
        try{
            $query = "DELETE FROM customer WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>