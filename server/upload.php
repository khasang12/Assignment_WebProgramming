<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

include_once './config/db.php';
include_once './vendor/autoload.php';

$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://localhost:8080';
ini_set('include_path', '.;C:\xampp\php\PEAR');
            
$dotenv = Dotenv\Dotenv::createMutable(__DIR__);
$dotenv->load();

if($_FILES['file'])
{
    $count = count($_FILES['file']['name']);
    for ($i = 0; $i < $count; $i++) {
        $data = (array) json_decode(file_get_contents('php://input'));
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

            if(move_uploaded_file($file_tmp_name , $upload_name)) {

                // Convert uploaded file into Base64
                $path = './'.$upload_name;
                $type = pathinfo($path, PATHINFO_EXTENSION);
                $data = file_get_contents($path);
                $base64 = base64_encode($data);
                if (str_contains($upload_name,'demo.mp4')){
                    $base64URL = 'data:video/' . $type . ';base64,' . $base64;
                }
                else{
                    $base64URL = 'data:image/' . $type . ';base64,' . $base64;
                }

                array_push($response,array(
                    "status" => "success",
                    "error" => false,
                    "message" => "File uploaded successfully",
                    "url" => $server_url."/".$upload_name,
                    "base64" => $base64URL,
                    "total" => $count
                  ));
                
                $db = new db();
                $conn = $db->connect();
                $query = "UPDATE resource SET data='$base64URL' WHERE name='$upload_name' ";
                $stmt = $conn->prepare($query);
                $stmt->execute();
                $conn->close();
            }else
            {
                array_push($response,array(
                    "status" => "danger",
                    "error" => true,
                    "url" =>  $file_name,
                    "message" => "Error uploading the file!"
                ));
            }
        }
    }

}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => print_r($_FILES['file'])
    );
}

echo json_encode($response);
?>