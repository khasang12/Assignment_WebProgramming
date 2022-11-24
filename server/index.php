<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

    include_once './vendor/autoload.php';
            
    $dotenv = Dotenv\Dotenv::createMutable(__DIR__);
    $dotenv->load();

    include_once './config/db.php';

    if(isset($_SERVER['REDIRECT_URL'])){
        $url = array_filter(explode('/', $_SERVER['REDIRECT_URL']));

        if(array_key_exists('2', $url)){
            if($url['2'] == 'users'){
                include './routes/user.route.php';
            }
            else if($url['2'] == 'user'){
                include './routes/user_info.route.php';
            }
            else if($url['2'] == 'news'){
                include './routes/news.route.php';
            }
            else if($url['2'] == 'category'){
                include './routes/category.route.php';
            }
            else if($url['2'] == 'product'){
                include './routes/product.route.php';
            }
            else if($url['2'] == 'order'){
                include './routes/order.route.php';
            }
            else if($url['2'] == 'comment'){
                include './routes/comment.route.php';
            }
            else{
                http_response_code(404);
                echo json_encode(["message" => 'Not found API!!!']);
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Not found API!!!']);
        }
    }
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Not found API!!!']);
    }
// $serverName='sql12.freesqldatabase.com';
// $username='sql12579701';
// $password='5xSCWaRL1v';
// $databaseName='sql12579701';


// $conn = mysqli_connect($serverName, $username, $password, $databaseName);


// $rec = "";
// if (isset($_POST['text'])) {
//     $rec = '"' . $_POST['text'] . '"';
// }

// $query = "INSERT INTO test(id,text) VALUES (NULL,'" . $rec . "')";
// if (mysqli_query($conn,$query)) {
//     echo $rec . ' has been inserted successfully';
// }
// else{
//     echo "$rec has not been inserted successfully";
// }
?>