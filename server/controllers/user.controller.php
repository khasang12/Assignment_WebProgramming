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
    public static function login($info) {
        $temp = new User();
        $new = $temp->getUser($info['username']);
        if($new->num_rows == 1){
            $rows = $new->fetch_all(MYSQLI_ASSOC);   
            if ($rows[0]['password'] == $info['password']) {
                unset($rows[0]['password']);
                $rows = json_encode($rows);
                return $rows;
            }
            throw new FileNotFoundError("Incorrect password!!!");
        }
        throw new FileNotFoundError("User not found!!!");
    }

    public static function signup($info){
        $temp = new User();
        $new = $temp->getUser($info['username']);
        if ($new->num_rows == 0) {
            print_r($info);
            $create = $temp->createUser($info['first_name'],$info['last_name'],$info['phone'],$info['email'],$info['birthday'],$info['username'],$info['password'],$info['address']);
            if ($create){
                http_response_code(200);
                return json_encode(["msg"=>"success"]);
            }
            throw new FileNotFoundError("User not created!!!");
        }
        throw new FileNotFoundError("Username exist!!!");
    }

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
