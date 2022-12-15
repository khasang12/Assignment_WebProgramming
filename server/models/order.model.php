<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Order{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAll($user_id){
        try{ 
            $query1 = "SELECT * FROM orders";
            $query2 = "SELECT O.order_id, O.product_id, P.price, P.name, O.quantity FROM orderdetail O, product P where O.product_id = P.id "; 

            if($user_id) {
                $query1 .= " WHERE customer_id = $user_id " ;
            }
            $orders = [] ;
            $products = [] ;

            $stmt1 = $this->conn->prepare($query1) ;
            $stmt1->execute() ; 
            $orders = $stmt1->get_result();
            $stmt1->close()  ;

            $stmt2 = $this->conn->prepare($query2) ;
            $stmt2->execute() ; 
            $products = $stmt2->get_result();
            $stmt2->close()  ;
            
            $products = ($products->fetch_all(MYSQLI_ASSOC)) ;
            $orders = ($orders->fetch_all(MYSQLI_ASSOC)) ;
    
            for($i = 0 ; $i < count($orders) ; $i++) {
                $id = $orders[$i]['id'];
                for($j = 0 ; $j < count($products) ; $j++) {
                    $order_id = $products[$j]['order_id']; 
                    if( $id == $order_id) {
                        $orders[$i]['products'][] = $products[$j];
                    }
                }
            }

            return $orders;
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function create($info){
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $userID = $info['userID'];
        $address = $info['address'];
        $receiverName = $info['receiverName'];
        $phoneNumber = $info['phoneNumber'];
        $p_method = $info['p_method'];
        $create_at = date('Y-m-d H:i:s');
        $status = "waiting";     

        $query0 = "INSERT INTO Orders(customer_id, address, receiverName,phoneNumber, paymentMethod, create_at, `status`) VALUES ($userID, '$address', '$receiverName', '$phoneNumber', '$p_method', '$create_at', '$status')";
        $stmt0 = $this->conn->prepare($query0);
        $stmt0->execute() ; 
        $last_id = $this->conn->insert_id ; // get last_id inserted
        $stmt0->close();

        $products = [] ;
        foreach($info['products'] as $p) {  // push order_id to array products
            array_unshift($p, $last_id);
            array_push($products, $p);
        } 


        $data = array();
        foreach($products as $p) { // to format [(),(),()]
            $order_id = (int) $p[0] ; 
            $product_id = (int) $p[1];
            $quantity = (int) $p[2];

            $data[] = "($order_id, $product_id, $quantity)" ; 
        } 
        $values = implode(',' , $data) ;    // to format (...,...,...) (...,...,...)
        $query1 = "INSERT INTO OrderDetail(order_id, product_id, quantity) VALUES $values";

        $stmt1 = $this->conn->prepare($query1) ;
        return $stmt1->execute();
    }

    public function updateStatus($id, $status){
        try{
            $query = "UPDATE Orders SET `status` = '$status' WHERE id = $id ";
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