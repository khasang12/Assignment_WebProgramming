<?php
    include_once(dirname(__FILE__) . '/../controllers/comment.controller.php');
    include_once(dirname(__FILE__) . '/../middleware/auth.php');

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];
    session_start();
    if(array_key_exists('3', $url)){
        // Get All Comment
        if($url['3'] == 'all' and $method == 'GET'){
            try{
                echo CommentController::getAllComment();
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
                echo CommentController::editComment($url['3'],$data);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['msg' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'DELETE'){
            try{               
                echo CommentController::deleteComment($url['3']);
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
                echo CommentController::createComment($data);
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