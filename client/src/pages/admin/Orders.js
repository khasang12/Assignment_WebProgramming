import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { OrdersTable } from '../../components/admin/OrdersTable';

export const OrderContext = createContext();

function Orders({ navbarAdmin }) {
    return (
        <div className={'px-5 pt-2 ' + (navbarAdmin ? 'fade' : '')}>
            <h2 className="text-center my-4">Quản lý đơn hàng</h2>
            {<OrdersTable />}
        </div>
    );
}

export default Orders;
