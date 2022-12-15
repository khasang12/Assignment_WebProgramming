<?php
include_once(dirname(__FILE__) . '/../models/order.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class OrderController{
    public static function getAllOrder($params){
        $user_id = array_key_exists('userId', $params) ? $params['userId'] : '' ;
        $temp = new Order();
        $new = $temp->getAll($user_id);

        if($new){
            return  json_encode($new);
        }

        throw new FileNotFoundError("Order not found!!!");
    }


    public static function createOrder($info){
        $temp = new Order();
        $new = $temp->create($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Order not created!!!");
    }


    public static function updateOrderStatus($id, $body){
        $temp = new Order();
        $status = $body['status'];
        $new = $temp->updateStatus($id, $status);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Order not found!!!");
    }
}

?>