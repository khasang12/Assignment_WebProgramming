import { Modal, Box, Checkbox, Grid, TextInput, Text, Group, ActionIcon } from '@mantine/core';
import sortBy from 'lodash/sortBy';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { OrderData } from './data';
import * as GrIcons from 'react-icons/gr';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PAGE_SIZES = [10, 15, 20];

export function OrdersTable() {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebouncedValue(query, 200);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(OrderData.slice(0, pageSize));

    const [product, setProduct] = useState(OrderData[0]);
    const [done, setDone] = useState({ status: false, msg: 'empty form' });
    const [sortStatus, setSortStatus] = useState({
        columnAccessor: 'price',
        direction: 'asc',
    });

    //Pagination
    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(OrderData.slice(from, to));
    }, [page, pageSize]);

    // Table search
    useEffect(() => {
        setRecords(
            OrderData.filter(({ order_id, order_date }) => {
                if (
                    debouncedQuery !== '' &&
                    !`${order_id} ${order_date}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
                ) {
                    return false;
                }
                return true;
            }),
        );
    }, [debouncedQuery]);

    // Sorting...
    useEffect(() => {
        const data = sortBy(OrderData, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [sortStatus]);

    const handleSubmit = (event) => {
        const toastOptions = {
            position: 'top-right',
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
        };
        event.preventDefault();
        // if (event.target.name === "edit") {
        //   if (done["status"] === false)
        //     return toast.error(done["msg"], toastOptions);
        //   else return toast.success("Cập nhật thành công", toastOptions);
        // } else
        if (event.target.name === 'delete') {
            return toast.success('Cập nhật thành công', toastOptions);
        }
    };

    return (
        <div>
            <Box sx={{ height: 600 }}>
                <div class="my-2">
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
                        { accessor: 'order_id', title: 'Mã đơn hàng', width: '35%' },
                        { accessor: 'customer_id', title: 'Mã tài khoản', width: 200 },
                        { accessor: 'total_order_money', title: 'Tổng giá trị', width: 200 },
                        { accessor: 'status', title: 'Trạng thái', width: 150 },
                        {
                            accessor: 'order_date',
                            title: 'Cập nhật lần cuối',
                            width: '100%',
                            sortable: true,
                            render: ({ updated_at }) => dayjs(updated_at).format('DD-MM-YYYY HH:mm:ss'),
                        },
                        {
                            accessor: 'actions',
                            title: <Text class="text-center">Thao tác</Text>,
                            textAlignment: 'right',
                            render: (item) => (
                                <Group spacing={4} position="right" noWrap>
                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewModal"
                                        onClick={() => setProduct(item)}
                                        color="green"
                                    >
                                        <GrIcons.GrView size={16} />
                                    </ActionIcon>

                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={() => setProduct(item)}
                                        color="blue"
                                    >
                                        <AiIcons.AiOutlineCheckCircle size={16} />
                                    </ActionIcon>

                                    <ActionIcon
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                        onClick={() => setProduct(item)}
                                        color="red"
                                    >
                                        <BiIcons.BiTrash size={16} />
                                    </ActionIcon>
                                </Group>
                            ),
                        },
                    ]}
                    totalRecords={OrderData.length}
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
                class="modal fade"
                id="viewModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Chi tiết đơn hàng
                            </h1>

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body gap-5 lh-lg">
                            <div class="d-flex flex-row">
                                <p class="text-secondary m-0">Mã đơn hàng:</p>
                                <p class="text-primary m-0 ms-auto">{product.order_id}</p>
                            </div>

                            <div class="d-flex flex-row">
                                <p class="text-secondary m-0">Tổng hóa đơn:</p>
                                <p class="text-primary m-0 ms-auto">{product.total_order_money}</p>
                            </div>
                            <hr />
                            {product.order_items.map((item, index) => {
                                return (
                                    <div class="ms-2 py-2">
                                        <div class="d-flex flex-row">
                                            <p class="text-secondary m-0">Mã hàng {index}:</p>
                                            <p class="text-primary m-0 ms-auto">{item.product_id}</p>
                                        </div>
                                        <div class="d-flex flex-row">
                                            <p class="text-secondary m-0">Số lượng:</p>
                                            <p class="text-primary m-0 ms-auto">{item.quantity}</p>
                                        </div>
                                        <div class="d-flex flex-row">
                                            <p class="text-secondary m-0">Thành tiền:</p>
                                            <p class="text-primary m-0 ms-auto">{item.total_money}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit */}
            <div
                class="modal fade"
                id="editModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Xác nhận đơn hàng
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-secondary w-25"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <p className="fs-4 fw-semibold">
                                Duyệt đơn hàng
                                <span class="text-success fw-bold">"{product.order_id}"</span> ?
                            </p>
                            <p class="fst-italic">Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Quay lại
                            </button>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                class="btn btn-primary"
                                name="delete"
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
                class="modal fade"
                id="deleteModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Hủy đơn hàng
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-secondary w-25"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <p className="fs-4 fw-semibold">
                                Hủy đơn hàng
                                <span class="text-danger fw-bold">"{product.order_id}"</span> ?
                            </p>
                            <p class="fst-italic">Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Quay lại
                            </button>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                class="btn btn-danger"
                                name="delete"
                                data-bs-dismiss="modal"
                            >
                                Xóa bình luận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
