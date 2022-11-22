import React from "react";
import { ProductsTable } from "../../components/admin/ProductsTable";

function Products({ navbarAdmin }) {
  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý sản phẩm</h2>
      <ProductsTable />
    </div>
  );
}

export default Products;
