import React from 'react';

import { PaginationTable } from "../../components/admin/Pagination";

function Products({navbarAdmin}) {
  return (
    <div className={"px-5 pt-2 "+(navbarAdmin?"fade":"")}>
      <h1>Sản phẩm</h1>
      <PaginationTable />
    </div>
  );
}

export default Products;
