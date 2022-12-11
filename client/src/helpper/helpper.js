export const getStatus = (status) => {
    if (status === 'canceled') return 'Đã huỷ';
    if (status === 'confirmed') return 'Đã xác nhận';
    if (status === 'waiting') return 'Chờ xử lý';
    return status;
};

export const getAddress_str = (address) => {
    return `${address.specificAddress}, ${address.city}, ${address.district}, ${address.ward} `;
};
