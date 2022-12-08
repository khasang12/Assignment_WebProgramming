<?php

include_once(dirname(__FILE__) . '/../middleware/utils/error.php');

class Comment{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllComment(){
        try{
            // chua xu li duoc viec lay comment khi admin_id = null
            $query = "SELECT M.id as id, P.name as product, Ac.username as username, Ad.username as admin_name, M.comment, M.updated_at, M.status FROM `Comment` M, `Admin` Ad, `Customer` Ac, `Product` P WHERE Ad.id<=>M.admin_id AND Ac.id<=>M.customer_id AND P.id<=>M.product_id";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        }
        catch (mysqli_sql_exception $e){
            echo $this->conn->error;
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createComment($info){

            $id = $info['id'];
            $admin_name = $info['admin_name'];
            $content = $info['content'];
            $thumbnail = $info['thumbnail'];

            $query0 = "SELECT id FROM Admin WHERE CONCAT(first_name,' ',last_name) = '$admin_name'";
            $stmt0 = $this->conn->query($query0);
            $admin_id = $stmt0->fetch_assoc()['id'];
            $stmt0->close();

            $query = "INSERT INTO Comment (id, admin_id, content, thumbnail) VALUES ($id, $admin_id,'$content','$thumbnail')";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
    }

    public function editComment($id, $info){
        try{
            $status = $info['status'];
            $admin_name = $info['admin_name'];

            $query0 = "SELECT id FROM Admin WHERE username = '$admin_name'";
            $stmt0 = $this->conn->query($query0);
            $admin_id = $stmt0->fetch_assoc()['id'];
            $stmt0->close();

            $query = "UPDATE Comment SET stats='$status', admin_id='$admin_id' WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteComment($id){
        try{
            echo $id;
            $query = "DELETE FROM Comment WHERE id = $id";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        }
        catch (mysqli_sql_exception $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>