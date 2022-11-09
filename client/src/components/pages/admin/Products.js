import React from 'react';
import { PaginationTable } from "./Pagination";

function Products() {
    console.log("product");
  return (
    <div className='mx-5 mt-2'>
      <h1>Sản phẩm</h1>
      <PaginationTable/>
    </div>
  );
}

export default Products;