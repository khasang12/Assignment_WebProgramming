<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Address{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllAddress($user_id){
        try{
            $query = "SELECT * FROM `address`";
            if ($user_id != '') {
                $query .= " WHERE user_id = $user_id";
            }
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createAddress($info){
            $user_id = $info['user_id'];
            $fullname = $info['fullname'];
            $phoneNumber = $info['phoneNumber'];
            $city = $info['city'];
            $district = $info['district'];
            $ward = $info['ward'];
            $specificAddress = $info['specificAddress'];

            $query = "INSERT INTO Address (user_id, city, district, ward, specificAddress, phoneNumber, receiverName) VALUES ($user_id, '$city',' $district', '$ward', '$specificAddress', '$phoneNumber', '$fullname')";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
    }

    public function editAddress($id, $info){
        try{
            $user_id = $info['user_id'];
            $fullname = $info['fullname'];
            $phoneNumber = $info['phoneNumber'];
            $city = $info['city'];
            $district = $info['district'];
            $ward = $info['ward'];
            $specificAddress = $info['specificAddress'];

            $query = "UPDATE address SET receiverName = '$fullname', phoneNumber = '$phoneNumber', city = '$city', district = '$district', ward = '$ward', specificAddress = '$specificAddress' WHERE id = $id AND user_id = $user_id";
            $stmt = $this->conn->prepare($query);
            return  $stmt->execute();

           
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteAddress($id){
        try{
            echo $id;
            $query = "DELETE FROM Address WHERE id = $id";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>