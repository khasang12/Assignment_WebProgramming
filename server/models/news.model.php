<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class News{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllNews(){
        try{
            $query = "SELECT N.id, CONCAT(A.first_name,' ',A.last_name) as admin_name, N.thumbnail, N.content FROM `News` N, `Admin` A WHERE N.admin_id=A.id";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createNews($info){

            $id = $info['id'];
            $admin_name = $info['admin_name'];
            $content = $info['content'];
            $thumbnail = $info['thumbnail'];

            $query0 = "SELECT id FROM Admin WHERE CONCAT(first_name,' ',last_name) = '$admin_name'";
            $stmt0 = $this->conn->query($query0);
            $admin_id = $stmt0->fetch_assoc()['id'];
            $stmt0->close();

            $query = "INSERT INTO News (id, admin_id, content, thumbnail) VALUES ($id, $admin_id,'$content','$thumbnail')";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
    }

    public function editNews($id, $info){
        try{
            $admin_name = $info['admin_name'];
            $content = $info['content'];
            $thumbnail = $info['thumbnail'];

            $query0 = "SELECT id FROM Admin WHERE CONCAT(first_name,' ',last_name) = '$admin_name'";
            $stmt0 = $this->conn->query($query0);
            $admin_id = $stmt0->fetch_assoc()['id'];
            $stmt0->close();

            $query = "UPDATE News SET admin_id = '$admin_id', content = '$content', thumbnail = '$thumbnail' WHERE id = $id";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteNews($id){
        try{
            echo $id;
            $query = "DELETE FROM News WHERE id = $id";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>