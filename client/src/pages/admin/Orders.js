import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { OrdersTable } from '../../components/admin/OrdersTable';

export const OrderContext = createContext();

function Orders({ navbarAdmin }) {
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        getOrders().then((res) => setOrderData(res));
    }, []);
    const getOrders = async () => {
        return await axios.get('http://localhost:8080/api/orders/all').then((res) => res.data);
    };

    console.log('re-render');
    console.log(orderData);
    return (
        <OrderContext.Provider value={[orderData, setOrderData, getOrders]}>
            <div className={'px-5 pt-2 ' + (navbarAdmin ? 'fade' : '')}>
                <h2 className="text-center my-4">Quản lý đơn hàng</h2>
                {orderData && orderData.length > 0 && <OrdersTable />}
            </div>
        </OrderContext.Provider>
    );
}

export default Orders;
