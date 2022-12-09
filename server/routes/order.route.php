<?php
    include_once(dirname(__FILE__) . '/../controllers/order.controller.php');
    include_once(dirname(__FILE__) . '/../middleware/auth.php');
    
    $url_components= parse_url($_SERVER['REQUEST_URI']);
    $url = array_filter(explode('/', $url_components['path']));

    $params = [];
    if (count($url_components) > 1)
         parse_str($url_components['query'], $params);

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();
    if(array_key_exists('3', $url)){
        // Get All order
        if($url['3'] and $method == 'GET'){
            try{
                if  ($url['3'] == 'all') {
                    //get all if param.user_id = undefine else get all order of user
                    echo OrderController::getAllOrder($params);
                    http_response_code(200);
                } else {  
                    // get by ID
                    echo OrderController::getOrder($url[3]);
                    http_response_code(200);
                }
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }

        else if($method == 'PUT'){
            try{
                $body = (array) json_decode(file_get_contents('php://input'));       
                echo OrderController::updateOrderStatus($url['3'], $body);
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
                echo OrderController::createOrder($data);
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