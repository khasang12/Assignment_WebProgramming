<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Cart{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllCart($user_id){
        try{
            $query1 = "SELECT * FROM cart WHERE id = $user_id" ;
            $stmt1 = $this->conn->prepare($query1);
            $stmt1->execute() ;
            $stmt1 = $stmt1->get_result() ;
            $cart = $stmt1->fetch_all(MYSQLI_ASSOC); 
            $cart_id = $cart['0']['id'] ;
            if ($cart_id == null) return ; 
            $stmt1->close() ;

            $query2 = "SELECT p.id AS product_id,c.cart_id,c.isSelected, p.name, p.thumbnail, p.price,c.quantity, c.total FROM product p, cart_item c WHERE p.id = c.product_id AND c.cart_id = $cart_id";
            $stmt2 = $this->conn->prepare($query2);
            $stmt2->execute();
            $cart_item = $stmt2->get_result();
            $cart_item = $cart_item->fetch_all(MYSQLI_ASSOC);
            $cart['0']['products'] = $cart_item ;
            $stmt2->close() ;
            return $cart['0'];
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function addToCart($user_id, $info){
        $product_id = $info['product_id'];
        $quantity = $info['quantity'];

        try{
            $query1 = "SELECT * FROM cart WHERE id = $user_id" ;
            $stmt1 = $this->conn->query($query1);
            $cart = $stmt1->fetch_all(MYSQLI_ASSOC)['0'] ; 
            $cart_id = $cart['id'] ;
            if ($cart_id == null) return ; 
            $stmt1->close() ;

            $query2 = "INSERT INTO Cart_item(cart_id, product_id, quantity) VALUES ($cart_id, $product_id, $quantity) ON DUPLICATE KEY UPDATE quantity = quantity + 1" ;
            $stmt2 = $this->conn->prepare($query2) ; 
            return $stmt2-> execute() ;
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateCartItem($user_id, $info){
      
        $quantity = $info['quantity'];
        try{
            $query1 = "SELECT * FROM cart WHERE id = $user_id" ;
            $stmt1 = $this->conn->query($query1);
            $cart = $stmt1->fetch_all(MYSQLI_ASSOC)['0'] ; 
            $cart_id = $cart['id'] ;
            if ($cart_id == null) return ; 
            $stmt1->close() ;

            $query2 = "UPDATE cart_item SET quantity = $quantity WHERE cart_id = $cart_id " ;
            $stmt2 = $this->conn->prepare($query2) ; 
            return $stmt2-> execute() ;
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteCartItem($user_id, $product_id){
        try{
            $query1 = "SELECT * FROM cart WHERE id = $user_id" ;
            $stmt1 = $this->conn->query($query1);
            $cart = $stmt1->fetch_all(MYSQLI_ASSOC)['0'] ; 
            $cart_id = $cart['id'] ;
            if ($cart_id == null) return ; 
            $stmt1->close() ;

            $query = "DELETE FROM cart_item WHERE cart_id = $cart_id AND product_id = $product_id";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>