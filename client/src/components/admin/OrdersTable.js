import { Modal, Box, Checkbox, Grid, TextInput, Text, Group, ActionIcon } from '@mantine/core';
import sortBy from 'lodash/sortBy';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
// import { orderData } from './data';
import * as GrIcons from 'react-icons/gr';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStatus } from '../../helpper/helpper';
import axios from 'axios';

import Price from '../../components/PriceDisplay/Price';

const PAGE_SIZES = [10, 15, 20];

export function OrdersTable() {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebouncedValue(query, 200);
    const [orderData, setOrderData] = useState([]);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(orderData.slice(0, pageSize));
    const [orderDetails, setOrderDetails] = useState(orderData.length > 0 && orderData[0]);
    const [done, setDone] = useState({ status: false, msg: 'empty form' });
    const [sortStatus, setSortStatus] = useState({
        columnAccessor: 'price',
        direction: 'asc',
    });

    const getOrders = async () => {
        return await axios
            .get('http://localhost:8080/api/orders/all')
            .then((res) => setOrderData(res.data))
            .catch((err) => alert('Đã xảy ra lỗi!', err));
    };
    useEffect(() => {
        const timer = window.setTimeout(() => {
            getOrders();
        }, 1000);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    //Pagination
    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(orderData.slice(from, to));
    }, [page, pageSize]);

    // Table search
    useEffect(() => {
        setRecords(
            orderData.filter(({ order_id, last_update }) => {
                if (
                    debouncedQuery !== '' &&
                    !`${order_id} ${last_update}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
                ) {
                    return false;
                }
                return true;
            }),
        );
    }, [debouncedQuery, orderData]);

    // Sorting...
    useEffect(() => {
        const data = sortBy(orderData, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [sortStatus]);

    const handleSubmit = async (event) => {
        const toastOptions = {
            position: 'top-right',
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
        };
        event.preventDefault();
        await axios({
            method: 'put',
            url: `http://localhost:8080/api/orders/${orderDetails.id}`,
            data: {
                status: event.target.name === 'edit' ? 'confirmed' : 'canceled',
            },
        }).then((res) => res);

        getOrders();

        if (event.target.name === 'edit') {
            if (done['status'] === false) return toast.error(done['msg'], toastOptions);
            else return toast.success('Cập nhật thành công', toastOptions);
        } else if (event.target.name === 'delete') {
            return toast.success('Cập nhật thành công', toastOptions);
        }
    };

    console.log(orderDetails);
    return (
        <div>
            <Box sx={{ height: 600 }}>
                <div className="my-2">
                    <TextInput
                        sx={{ flexBasis: '30%' }}
                        placeholder="Nhập mã đơn hàng hoặc ngày tạo đơn..."
                        value={query}
                        onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                </div>

                <DataTable
                    withBorder
                    borderRadius="md"
                    shadow="md"
                    withColumnBorders
                    striped
                    highlightOnHover
                    horizontalSpacing="xs"
                    verticalSpacing="xs"
                    fontSize="sm"
                    verticalAlignment="center"
                    records={records}
                    columns={[
                        { accessor: 'id', title: 'Mã đơn' },
                        { accessor: 'customer_id', title: 'Mã TK' },
                        { accessor: 'total_order_money', title: 'Tổng giá trị' },
                        {
                            accessor: 'create_at',
                            title: 'Ngày đặt',
                            width: 150,
                            sortable: true,
                        },
                        {
                            accessor: 'last_update',
                            title: 'Cập nhật lần cuối',
                            sortable: true,
                        },
                        { accessor: 'phoneNumber', title: 'Số điện thoại' },
                        { accessor: 'address', title: 'Địa chỉ', width: '100%' },
                        {
                            accessor: 'status',
                            title: 'Trạng thái',
                            width: 120,
                            render: (item) => getStatus(item.status),
                        },
                        {
                            accessor: 'actions',
                            title: <Text className="text-center">Thao tác</Text>,
                            textAlignment: 'right',
                            render: (item) => (
                                <Group spacing={4} position="right" noWrap className="align-center">
                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewModal"
                                        onClick={() => setOrderDetails(item)}
                                        color="green"
                                    >
                                        <GrIcons.GrView size={16} />
                                    </ActionIcon>

                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={() => setOrderDetails(item)}
                                        color="blue"
                                    >
                                        <AiIcons.AiOutlineCheckCircle size={16} />
                                    </ActionIcon>

                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                        onClick={() => setOrderDetails(item)}
                                        color="red"
                                    >
                                        <BiIcons.BiTrash size={16} />
                                    </ActionIcon>
                                </Group>
                            ),
                        },
                    ]}
                    totalRecords={orderData.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                />
            </Box>
            {/* View */}
            <div
                className="modal fade"
                id="viewModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Chi tiết đơn hàng
                            </h1>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body gap-5 lh-lg">
                            <div className="d-flex flex-row">
                                <p className="text-secondary m-0">Mã đơn hàng:</p>
                                <p className="text-primary m-0 ms-auto">{orderDetails.id}</p>
                            </div>
                            <div className="d-flex flex-row">
                                <p className="text-secondary m-0">Tổng hóa đơn:</p>
                                <p className="text-primary m-0 ms-auto">{orderDetails.total_order_money}</p>
                            </div>
                            <hr />
                            {orderDetails.products &&
                                orderDetails.products.map((item, index) => {
                                    return (
                                        <div className="ms-2 py-2" key={index}>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Mã hàng {index + 1}:</p>
                                                <p className="text-primary m-0 ms-auto">#{item.product_id}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Tên sản phẩm:</p>
                                                <p className="text-primary m-0 ms-auto">{item.name}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Số lượng:</p>
                                                <p className="text-primary m-0 ms-auto">{item.quantity}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Thành tiền:</p>
                                                <Price primary className="ms-auto">
                                                    {item.price}
                                                </Price>
                                            </div>
                                        </div>
                                    );
                                })}
                            <div>
                                <div className="d-flex flex-row">
                                    <p className="text-secondary m-0">Người nhận: </p>
                                    <p className="text-primary m-0 ms-auto">{orderDetails.receiverName}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="text-secondary m-0">Địa chỉ </p>
                                    <p className="text-primary m-0 ms-auto">{orderDetails.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit */}
            <div
                className="modal fade"
                id="editModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Xác nhận đơn hàng
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-secondary w-25"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <p className="fs-4 fw-semibold">
                                Duyệt đơn hàng
                                <span className="text-success fw-bold">"{orderDetails.id}"</span> ?
                            </p>
                            <p className="fst-italic">Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Quay lại
                            </button>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="btn btn-primary"
                                name="edit"
                                data-bs-dismiss="modal"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete */}
            <div
                className="modal fade"
                id="deleteModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Hủy đơn hàng
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-secondary w-25"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <p className="fs-4 fw-semibold">
                                Hủy đơn hàng
                                <span className="text-danger fw-bold">"{orderDetails.id}"</span> ?
                            </p>
                            <p className="fst-italic">Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Quay lại
                            </button>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="btn btn-danger"
                                name="delete"
                                data-bs-dismiss="modal"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
