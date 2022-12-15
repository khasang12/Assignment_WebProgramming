<?php
include_once(dirname(__FILE__) . '/../models/Cart.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class CartController{
    public static function getAllCart($user_id){
        $temp = new Cart();
        $new = $temp->getAllCart($user_id);
        if(count($new)> 0){
            $rows = json_encode($new);
            return $rows;
        }

        throw new FileNotFoundError("Cart not found!!!");
    }

    public static function createCart($info){
        $temp = new Cart();
        $new = $temp->createCart($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Cart not created or Author not found!!!");
    }

    public static function addToCart($id, $data){
        $temp = new Cart();
        $new = $temp->addToCart($id, $data);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Cart not found!!!");
    }

    public static function updateCartItem($id, $data){
        $temp = new Cart();
        $new = $temp->updateCartItem($id, $data);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Cart not found!!!");
    }

    public static function deleteCartItem($user_id, $data){
        $temp = new Cart();
        $new = $temp->deleteCartItem($user_id, $data['product_id']);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Cart not found!!!");
    }
}

?>