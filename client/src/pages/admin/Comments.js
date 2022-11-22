import React from "react";
import { CommentsTable } from "../../components/admin/CommentsTable";

function Comments({ navbarAdmin }) {
  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý phản hồi, bình luận</h2>
      <CommentsTable />
    </div>
  );
}

export default Comments;
