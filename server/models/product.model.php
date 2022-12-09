<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Product{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllProduct($params){
        try{
            $query = "SELECT * FROM product ";
            if ($params) {
                $query .= ' WHERE ' ;
                foreach(array_keys($params) as $key) {
                    $query .= "$key= \"$params[$key]\" ";
                }
            }
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getProduct($id){
        try{
            $query = "SELECT * FROM product Where id = $id";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createProduct($info){
        print_r($info);
            $id = $info['id'];
            $name = $info['name'];
            $price = $info['price'];
            $quantity = $info['quantity'];
            $overall_rating= 0;
            $thumbnail = $info['thumbnail'];

            $brand = $info['brand'];
            $cpu = $info['cpu'];
            $gpu = $info['gpu'];
            $ram = $info['ram'];
            $disk = $info['disk'];
            $description = $info['description'];
            $num_rates = 0;
            $screen_tech = $info['screen_tech'];
            $screen_size = $info['screen_size'];
            $weight = $info['weight'];
            $os = $info['os'];

            $query = "INSERT INTO product (`name`,thumbnail,price,quantity,brand,cpu,gpu,ram,`disk`,screen_size,screen_tech,os,overall_rating,`description`,`weight`,num_rates) VALUES ('$name','$thumbnail',$price,$quantity,'$brand','$cpu','$gpu','$ram','$disk','$screen_size','$screen_tech','$os',$overall_rating,'$description',$weight,$num_rates)";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
    }

    public function editProduct($id, $info){
        try{
            $name = $info['name'];
            $price = $info['price'];
            $quantity = $info['quantity'];
            $overall_rating= 0;
            $thumbnail = $info['thumbnail'];

            $brand = $info['brand'];
            $cpu = $info['cpu'];
            $gpu = $info['gpu'];
            $ram = $info['ram'];
            $disk = $info['disk'];
            $description = $info['description'];
            $num_rates = 0;
            $screen_tech = $info['screen_tech'];
            $screen_size = $info['screen_size'];
            $weight = $info['weight'];
            $os = $info['os'];

            $query = "UPDATE product SET name = '$name', price= $price,overall_rating= $overall_rating,num_rates= $num_rates, thumbnail = '$thumbnail', quantity = $quantity, brand='$brand',cpu='$cpu',gpu='$gpu',screen_size='$screen_size',screen_tech='$screen_tech',ram='$ram',disk='$disk',description='$description',weight='$weight',os='$os' WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteProduct($id){
        try{
            echo $id;
            $query = "DELETE FROM product WHERE id = '$id'";
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