<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Resource{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getResource($name){
        try{
            $query = "SELECT data FROM Resource WHERE name LIKE '%$name%'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function editResource(){
        try{
            $upload_dir = 'uploads/';
            if($_FILES['file'])
            {
                $count = count($_FILES['file']['name']);
                for ($i = 0; $i < $count; $i++) {
                    $file_name = $_FILES["file"]["name"][$i];
                    $file_tmp_name = $_FILES["file"]["tmp_name"][$i];
                    $error = $_FILES["file"]["error"][$i];
                
                    if($error > 0){
                        array_push($response,array(
                            "status" => "error",
                            "error" => true,
                            "message" => "Error uploading the file!"
                        ));
                    }else 
                    {
                        $upload_name = $upload_dir.strtolower($file_name);
                        $upload_name = preg_replace('/\s+/', '-', $upload_name);

                        if (move_uploaded_file($file_tmp_name, $upload_name)) {

                            // Convert uploaded file into Base64
                            $path = './' . $upload_name;
                            $type = pathinfo($path, PATHINFO_EXTENSION);
                            $data = file_get_contents($path);
                            $base64 = base64_encode($data);
                            if (str_contains($upload_name, 'demo.mp4')) {
                                $base64URL = 'data:video/' . $type . ';base64,' . $base64;
                            } else {
                                $base64URL = 'data:image/' . $type . ';base64,' . $base64;
                            }

                            $query = "UPDATE resource SET data='$base64URL' WHERE name='$upload_name' ";
                            $stmt = $this->conn->prepare($query);
                            $stmt->execute();
                            return $stmt->get_result();
                        }
                    }
                }

            }
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>