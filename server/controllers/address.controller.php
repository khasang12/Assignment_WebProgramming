<?php
include_once(dirname(__FILE__) . '/../models/address.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class AddressController{
    public static function getAllAddress($params){
        $user_id = ($params and array_key_exists('user_id',  $params)) ? $params['user_id'] : '' ;
        $temp = new Address();

        $new = $temp->getAllAddress($user_id);

        if($new->num_rows >= 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("Address not found!!!");
    }

    public static function createAddress($info){
        $temp = new Address();
        $new = $temp->createAddress($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Address not created!!!");
    }

    public static function editAddress($id, $data){
        $temp = new Address();
        $new = $temp->editAddress($id, $data);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Address not found!!!");
    }

    public static function deleteAddress($id){
        $temp = new Address();
        $new = $temp->deleteAddress($id);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Address not found!!!");
    }
}

?>