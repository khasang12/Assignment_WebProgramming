<?php
    include_once(dirname(__FILE__) . '/../controllers/news.controller.php');
    include_once(dirname(__FILE__) . '/../middleware/auth.php');

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];
    session_start();
    if(array_key_exists('3', $url)){
        // Get All News
        if($url['3'] == 'all' and $method == 'GET'){
            try{
                echo NewsController::getAllNews();
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($url['3'] == 'detail' and $method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                echo NewsController::getNewsDetail($data[0]);
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
                echo NewsController::editNews($data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'DELETE'){
            try{               
                echo NewsController::deleteNews($url['3']);
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
                print_r($data);
                echo NewsController::createNews($data);
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