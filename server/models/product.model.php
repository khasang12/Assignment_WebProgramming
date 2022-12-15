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
            if ($params && ((count(array_flip($params)) !== 1 && count($params)>1) ||count($params)==1)) {
                $query .= ' WHERE ' ;
                if (isset($params['priceFrom'])){
                    $priceFrom = mysqli_real_escape_string($this->conn,$params['priceFrom']); 
                    $query .= "price >= $priceFrom";
                    if(isset($params['priceTo'])){
                        $priceTo = mysqli_real_escape_string($this->conn,$params['priceTo']);
                        $query .= " AND price <= $priceTo";
                    }
                }
                else{
                    foreach(array_keys($params) as $key) {
                        if ($params[$key]=='all' || $params[$key]=='undefined'){
                            continue;
                        }
                        if($key!='sorted'){
                            $q = mysqli_real_escape_string($this->conn,$params[$key]);
                            $query .= "$key LIKE \"%$q%\" AND ";
                        }
                        else{
                            if($params[$key]=='priceUp'){
                                $query .= "1=1 ORDER BY price ASC ";
                            }
                            else if($params[$key]=='priceDown'){
                                $query .= "1=1 ORDER BY price DESC ";
                            }
                            else if($params[$key]=='hot'){
                                $query .= "1=1 ORDER BY num_rates DESC ";
                            }
                            $stmt = $this->conn->prepare($query);
                            $stmt->execute();
                            return $stmt->get_result();
                        }
                    }
                    $query .= "1=1";
                }  
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

    public function getProduct($id){
        try{
            $id = mysqli_real_escape_string($this->conn,$id);
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
            $id = mysqli_real_escape_string($this->conn,$info['id']);
            $name = mysqli_real_escape_string($this->conn,$info['name']);
            $price = mysqli_real_escape_string($this->conn,$info['price']);
            $quantity = mysqli_real_escape_string($this->conn,$info['quantity']);
            $overall_rating= 0;
            $thumbnail = mysqli_real_escape_string($this->conn,$info['thumbnail']);

            $brand = mysqli_real_escape_string($this->conn,$info['brand']);
            $cpu = mysqli_real_escape_string($this->conn,$info['cpu']);
            $gpu = mysqli_real_escape_string($this->conn,$info['gpu']);
            $ram = mysqli_real_escape_string($this->conn,$info['ram']);
            $disk = mysqli_real_escape_string($this->conn,$info['disk']);
            $description = mysqli_real_escape_string($this->conn,$info['description']);
            $num_rates = 0;
            $screen_tech = mysqli_real_escape_string($this->conn,$info['screen_tech']);
            $screen_size = mysqli_real_escape_string($this->conn,$info['screen_size']);
            $weight = mysqli_real_escape_string($this->conn,$info['weight']);
            $os = mysqli_real_escape_string($this->conn,$info['os']);

            $query = "INSERT INTO product (`name`,thumbnail,price,quantity,brand,cpu,gpu,ram,`disk`,screen_size,screen_tech,os,overall_rating,`description`,`weight`,num_rates) VALUES ('$name','$thumbnail',$price,$quantity,'$brand','$cpu','$gpu','$ram','$disk','$screen_size','$screen_tech','$os',$overall_rating,'$description',$weight,$num_rates)";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
    }

    public function editProduct($id, $info){
        try{
            $id = mysqli_real_escape_string($this->conn,$id);
            $name = mysqli_real_escape_string($this->conn,$info['name']);
            $price = mysqli_real_escape_string($this->conn,$info['price']);
            $quantity = mysqli_real_escape_string($this->conn,$info['quantity']);
            $overall_rating= 0;
            $thumbnail = mysqli_real_escape_string($this->conn,$info['thumbnail']);

            $brand = mysqli_real_escape_string($this->conn,$info['brand']);
            $cpu = mysqli_real_escape_string($this->conn,$info['cpu']);
            $gpu = mysqli_real_escape_string($this->conn,$info['gpu']);
            $ram = mysqli_real_escape_string($this->conn,$info['ram']);
            $disk = mysqli_real_escape_string($this->conn,$info['disk']);
            $description = mysqli_real_escape_string($this->conn,$info['description']);
            $num_rates = 0;
            $screen_tech = mysqli_real_escape_string($this->conn,$info['screen_tech']);
            $screen_size = mysqli_real_escape_string($this->conn,$info['screen_size']);
            $weight = mysqli_real_escape_string($this->conn,$info['weight']);
            $os = mysqli_real_escape_string($this->conn,$info['os']);

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
