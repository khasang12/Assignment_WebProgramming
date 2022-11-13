import React from 'react';

import { PaginationTable } from "../../components/admin/Pagination";

function Orders({navbarAdmin}) {
  return (
    <div className={"px-5 pt-2 "+(navbarAdmin?"fade":"")}>
      <h1>Đơn hàng</h1>
      <PaginationTable />
    </div>
  );
}

export default Orders;
