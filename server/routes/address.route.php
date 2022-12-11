<?php
    include_once(dirname(__FILE__) . '/../controllers/address.controller.php');
    include_once(dirname(__FILE__) . '/../middleware/auth.php');
    
    $url_components= parse_url($_SERVER['REQUEST_URI']);
    $url = array_filter(explode('/', $url_components['path']));

    $params = '';
    if (count($url_components) > 1) {
        parse_str($url_components['query'], $params);
    }

    $method = $_SERVER['REQUEST_METHOD'];


    session_start();
    if(array_key_exists('3', $url)){
        // Get All Addresss
        if($url['3'] == 'all' and $method == 'GET'){
            try{
                echo AddressController::getAllAddress($params);
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
                echo AddressController::editAddress($url['3'], $data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'DELETE'){
            try{               
                echo AddressController::deleteAddress($url['3']);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["msg" => 'Not found API!!!']);
        }
    }
    else{
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                echo AddressController::createAddress($data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["msg" => 'Not found API!!!']);
        }

    }
    session_destroy();
?>