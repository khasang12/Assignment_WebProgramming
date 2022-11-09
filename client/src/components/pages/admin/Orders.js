import React from 'react';
import { PaginationTable } from "./Pagination";

function Orders() {
  return (
    <div className='mx-5 mt-2'>
      <h1>Đơn hàng</h1>
      <PaginationTable/>
    </div>
  );
}

export default Orders;