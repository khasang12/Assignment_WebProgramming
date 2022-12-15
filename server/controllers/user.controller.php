<?php
include_once(dirname(__FILE__) . '/../models/user.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');
use Firebase\JWT\JWT;

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
                $key = $_SERVER['SECRET_KEY'];
                unset($rows[0]['password']);

                $getDate = new DateTimeImmutable();
                $rows['created_time'] = $getDate->modify('+1 hour')->getTimestamp();
                $jwt = JWT::encode($rows, $key, 'HS256');
                return json_encode(["data" => [
                    'type' => 'user',
                    'id' => $rows[0]['id'],
                    'first_name' => $rows[0]['first_name'],
                    'last_name' => $rows[0]['last_name'],
                    'email' => $rows[0]['email'],
                    'token' => $jwt
                ]]);
            }
            throw new FileNotFoundError("Incorrect password!!!");
        }
        $new = $temp->getUserAdmin($info['username']);
        if($new->num_rows == 1){
            $rows = $new->fetch_all(MYSQLI_ASSOC);   
            if ($rows[0]['password'] == $info['password']) {
                $key = $_SERVER['SECRET_KEY'];
                unset($rows[0]['password']);

                $getDate = new DateTimeImmutable();
                $rows['created_time'] = $getDate->modify('+1 hour')->getTimestamp();
                $jwt = JWT::encode($rows, $key, 'HS256');
                return json_encode(["data" => [
                    'type' => 'admin',
                    'id' => $rows[0]['id'],
                    'first_name' => $rows[0]['first_name'],
                    'last_name' => $rows[0]['last_name'],
                    'token' => $jwt
                ]]);
            }
            throw new FileNotFoundError("Incorrect password!!!");
        }
        throw new BadRequestError('Invalid username or password');
    }

    public static function signup($info){
        $temp = new User();
        $new = $temp->getUser($info['username']);
        if ($new->num_rows == 0) {
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
