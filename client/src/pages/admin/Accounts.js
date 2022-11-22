import React from "react";
import { AccountsTable } from "../../components/admin/AccountsTable";

function Accounts({ navbarAdmin }) {
  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý tài khoản</h2>
      <AccountsTable />
    </div>
  );
}

export default Accounts;
