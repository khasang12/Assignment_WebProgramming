<?php
include_once(dirname(__FILE__) . '/../models/comment.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class CommentController{
    public static function getAllComment(){
        $temp = new Comment();

        $new = $temp->getAllComment();

        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("Comment not found!!!");
    }
    public static function getProductComments($product_id){
        $temp = new Comment();
        $new = $temp->getProductComments($product_id);

        if($new->num_rows >= 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("Comment not found!!!");
    }
    public static function createComment($info){
        $temp = new Comment();
        $new = $temp->createComment($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Comment not created!!!");
    }

    public static function createUserComment($info){
        $temp = new Comment();
        $new = $temp->createUserComment($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("Comment not created!!!");
    }

    

    public static function editComment($id, $data){
        $temp = new Comment();
        $new = $temp->editComment($id, $data);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Comment not found!!!");
    }

    public static function deleteComment($id){
        $temp = new Comment();
        $new = $temp->deleteComment($id);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("Comment not found!!!");
    }
}

?>