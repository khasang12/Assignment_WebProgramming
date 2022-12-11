<?php
include_once(dirname(__FILE__) . '/../models/product.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class ProductController{
    public static function getAllProduct($params){
        $temp = new Product();

        $new = $temp->getAllProduct($params);

        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("Product not found!!!");
    }

    public static function getProduct($id) {
        $temp = new Product();

        $new = $temp->getProduct($id);

        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows[0]);
            return $rows;
        }

        throw new FileNotFoundError("Product not found!!!");
    }


    public static function createProduct($info){
        $temp = new Product();
        $new = $temp->createProduct($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Product not created!!!");
    }

    public static function editProduct($id, $data){
        $temp = new Product();
        $new = $temp->editProduct($id, $data);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Product not found!!!");
    }

    public static function deleteProduct($id){
        $temp = new Product();
        $new = $temp->deleteProduct($id);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Product not found!!!");
    }
}

?>