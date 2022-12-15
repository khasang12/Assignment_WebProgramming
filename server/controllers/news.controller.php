<?php
include_once(dirname(__FILE__) . '/../models/news.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class NewsController{
    public static function getAllNews(){
        $temp = new News();

        $new = $temp->getAllNews();

        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("News not found!!!");
    }
    public static function getNewsDetail($id){
        $temp = new News();
        $new = $temp->getNewsDetail($id);
        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("News not found!!!");
    }
    public static function createNews($info){
        $temp = new News();
        $new = $temp->createNews($info);
        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }
        throw new FileNotFoundError("News not created or Author not found!!!");
    }

    public static function editNews($data){
        $temp = new News();
        $new = $temp->editNews($data);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("News not found!!!");
    }

    public static function deleteNews($id){
        $temp = new News();
        $new = $temp->deleteNews($id);

        if ($new){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        throw new FileNotFoundError("News not found!!!");
    }
}

?>