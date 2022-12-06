<?php
include_once(dirname(__FILE__) . '/../models/user.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class UserController{
    public static function getAllUser(){
        $temp = new User();

        $new = $temp->getAllUser();

        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("User not found!!!");
    }

    // public static function createUser($info){
    //     $temp = new User();
    //     $new = $temp->createUser($info);
    //     if ($new){
    //         http_response_code(200);
    //         return json_encode(["msg"=>"success"]);
    //     }
    //     throw new FileNotFoundError("User not created!!!");
    // }

    // public static function editUser($id, $data){
    //     $temp = new User();
    //     $new = $temp->editUser($id, $data);

    //     if ($new){
    //         http_response_code(200);
    //         return json_encode(["msg"=>"success"]);
    //     }

    //     throw new FileNotFoundError("User not found!!!");
    // }

    public static function deleteUser($id){
        $temp = new User();
        $new = $temp->deleteUser($id);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("User not found!!!");
    }
}
