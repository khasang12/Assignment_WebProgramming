import React from 'react';
import { PaginationTable } from './Pagination';

function Accounts() {
  return (
    <div className='mx-5 mt-2'>
      <h1>Tài khoản khách hàng</h1>
      <PaginationTable/>
    </div>
  );
}

export default Accounts;