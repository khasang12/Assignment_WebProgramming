import React, { useState } from "react";
import { NewsTable } from "../../components/admin/NewsTable";

function News({ navbarAdmin }) {

  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý tin tức</h2>
      <NewsTable />
    </div>
  );
}

export default News;
