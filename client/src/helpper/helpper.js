export const getStatus = (status) => {
    if (status === 'canceled') return 'Đã huỷ';
    if (status === 'confirmed') return 'Đã xác nhận';
    if (status === 'waiting') return 'Chờ xử lý';
    return status;
};
