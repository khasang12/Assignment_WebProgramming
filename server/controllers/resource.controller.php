<?php
include_once(dirname(__FILE__) . '/../models/Resource.model.php');
include_once(dirname(__FILE__) . '/../middleware/utils/error.php');
include_once(dirname(__FILE__) . '/../middleware/utils/utils.php');

class ResourceController{
    public static function getResource($name){
        $temp = new Resource();
        $new = $temp->getResource($name);
        if($new->num_rows > 0){
            $rows = $new->fetch_all(MYSQLI_ASSOC);
            $rows = json_encode($rows);
            return $rows;
        }

        throw new FileNotFoundError("Resource not found!!!");
    }

    public static function editResource(){
        $temp = new Resource();
        $new = $temp->editResource();
        if ($new!=false){
            http_response_code(200);
            return json_encode(["msg"=>"success"]);
        }

        //throw new FileNotFoundError("Resource not found!!!");
    }

}

?>