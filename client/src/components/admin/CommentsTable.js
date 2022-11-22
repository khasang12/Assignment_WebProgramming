import {
  Modal,
  Box,
  TextInput,
  Text,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import dayjs from 'dayjs';
import sortBy from "lodash/sortBy";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { CommentData } from "./data";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_SIZES = [10, 15, 20];

export function CommentsTable() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(CommentData.slice(0, pageSize));

  const [product, setProduct] = useState({});
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "price",
    direction: "asc",
  });

  //Pagination
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(CommentData.slice(from, to));
  }, [page, pageSize]);

  // Table search
  useEffect(() => {
    setRecords(
      CommentData.filter(({ productName, userName, star }) => {
        if (
          debouncedQuery !== "" &&
          !`${star} ${productName} ${userName}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  // Sorting...
  useEffect(() => {
    const data = sortBy(CommentData, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  // Form validation
  // useEffect(() => {
  //   const { Comment_id, email, firstName, lastName, subscriptionTier } = values;
  //   if (product_id === "") {
  //     setDone({ status: false, msg: "Vui lòng nhập mã số" });
  //   } else if (email === undefined || email === "") {
  //     setDone({ status: false, msg: "Vui lòng chọn tiêu đề" });
  //   } else if (category === undefined || category === "") {
  //     setDone({ status: false, msg: "Vui lòng chọn phân loại" });
  //   } else if (quantity === undefined || quantity === 0) {
  //     setDone({ status: false, msg: "Vui lòng nhập số lượng" });
  //   } else if (price === undefined || price === 0) {
  //     setDone({ status: false, msg: "Vui lòng chọn giá bán" });
  //   } else if (desc === undefined || desc === "") {
  //     setDone({ status: false, msg: "Vui lòng mô tả sản phẩm" });
  //   } else if (thumbnail === undefined || thumbnail === "") {
  //     setDone({ status: false, msg: "Vui lòng chọn ảnh" });
  //   } else {
  //     setDone({ status: true, msg: "validated form" });
  //   }
  // }, [values]);

  const handleSubmit = (event) => {
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    event.preventDefault();
    // if (event.target.name === "edit") {
    //   if (done["status"] === false)
    //     return toast.error(done["msg"], toastOptions);
    //   else return toast.success("Cập nhật thành công", toastOptions);
    // } else
    if (event.target.name === "delete") {
      return toast.success("Cập nhật thành công", toastOptions);
    }
  };

  return (
    <div>
      <Box sx={{ height: 600 }}>
        <div class="my-2">
          <TextInput
            sx={{ flexBasis: "30%" }}
            placeholder="Nhập tên người dùng hoặc tên sản phẩm..."
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
            { accessor: "comment_id", title: "Mã bình luận", width: "35%" },
            { accessor: "product_id", title: "Mã sản phẩm", width: 200 },
            { accessor: "product_id", title: "Mã tài khoản", width: 200 },
            { accessor: "comment", title: "Bình luận", width: 200 },
            { accessor: "status", title: "Trạng thái", width: 150 },
            { accessor: "updated_at", title: "Cập nhật lần cuối", width: "100%", sortable:true , render: ({ updated_at }) => dayjs(updated_at).format('DD-MM-YYYY HH:mm:ss')},
            {
              accessor: "actions",
              title: <Text class="text-center">Thao tác</Text>,
              textAlignment: "right",
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
          totalRecords={CommentData.length}
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
                Chi tiết bình luận
              </h1>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body gap-5 lh-lg">
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tiêu đề:</p>
                <p class="text-primary m-0 ms-auto">{product.title}</p>
              </div>

              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên sản phẩm:</p>
                <p class="text-primary m-0 ms-auto">{product.productName}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên tài khoản:</p>
                <p class="text-primary m-0 ms-auto">{product.userName}</p>
              </div>

              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Đánh giá:</p>
                <p class="text-primary m-0 ms-auto">{product.rating}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Chi tiết:</p>
                <p class="text-primary m-0 ms-auto">{product.desc}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
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
                Xóa bình luận
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
                Xóa bình luận
                <span class="text-danger fw-bold">"{product.comment_id}"</span>{" "}
                ?
              </p>
              <p class="fst-italic">
                Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác lại.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
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
