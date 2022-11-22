import React from "react";
import { OrdersTable } from "../../components/admin/OrdersTable";

function Orders({ navbarAdmin }) {
  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý đơn hàng</h2>
      <OrdersTable />
    </div>
  );
}

export default Orders;
