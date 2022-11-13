import React from 'react';

import { PaginationTable } from "../../components/admin/Pagination";

function Accounts({navbarAdmin}) {
  return (
    <div className={"px-5 pt-2 "+(navbarAdmin?"fade":"")}>
      <h1>Tài khoản khách hàng</h1>
      <PaginationTable />
    </div>
  );
}

export default Accounts;
