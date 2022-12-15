<?php
    include_once(dirname(__FILE__) . '/../controllers/cart.controller.php');
    include_once(dirname(__FILE__) . '/../middleware/auth.php');

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];
    session_start();
    if(array_key_exists('3', $url)){
        // Get All Cart
        if($method == 'GET'){
            try{
                echo CartController::getAllCart($url[3]);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));       
                echo CartController::updateCartItem($url['3'],$data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'DELETE'){
            try{        
                $data = (array) json_decode(file_get_contents('php://input'));       
                echo CartController::deleteCartItem($url['3'], $data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        } 
        else if ($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                echo CartController::addToCart($url['3'], $data);
                http_response_code(200);

            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else {
            http_response_code(404);
            echo json_encode(["msg" => 'Not found API!!!']);
        }
    }
    session_destroy();
?>