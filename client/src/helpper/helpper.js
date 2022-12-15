export const getStatus = (status) => {
    if (status === 'canceled') return 'Đã huỷ';
    if (status === 'confirmed') return 'Đã xác nhận';
    if (status === 'waiting') return 'Chờ xử lý';
    return status;
};

export const getAddress_str = (address) => {
    return `${address.specificAddress}, ${address.city}, ${address.district}, ${address.ward} `;
};

export const getPaymentMethod_str = (type) =>
    (type === 'momo' && 'Thanh toán bằng ví điện tử momo') ||
    (type === 'cash' && 'Thanh toán khi nhận hàng') ||
    (type === 'vnpay' && 'Thanh toán bằng VNPAY') ||
    (type === 'zalopay' && 'Thanh toán bằng ví điện tử ZaloPay');
