import {
  Modal,
  Box,
  TextInput,
  Text,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import dayjs from "dayjs";
import sortBy from "lodash/sortBy";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PAGE_SIZES = [10, 15, 20];

export function CommentsTable() {
  const [commentList, setCommentList] = useState([]);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(commentList.slice(0, pageSize));

  const [values, setValues] = useState({});
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "price",
    direction: "asc",
  });

  // Effects
  useEffect(() => {
    setPage(1);
  }, [pageSize]);
  // Get all Data after FIRST LOADING for 1 second
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      getCommentsList();
    }, 1000);
    return () => window.clearTimeout(timeoutID);
  }, []);
  //Pagination
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(commentList.slice(from, to));
  }, [page, pageSize, records]);

  // Table search
  useEffect(() => {
    setRecords(
      commentList.filter(({ product, username }) => {
        if (
          debouncedQuery !== "" &&
          !`${product} ${username}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, records]);

  // Sorting...
  useEffect(() => {
    const data = sortBy(commentList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  // FUNCTIONS
  // Get all comments
  const getCommentsList = async () => {
    await axios
      .get("http://localhost:8080/api/comments/all")
      .then((response) => setCommentList(response.data))
      //.then(setRecords(valuesList))
      .catch((res) => alert(res));
  };
  // Change Status of a comment to Replied
  const editComment = (comment) => {
    const id = comment["id"];
    const admin_name = comment["admin_name"];
    comment['status'] = "Đã phản hồi";
    axios({
      method: "put",
      url: `http://localhost:8080/api/comments/${id}`,
      data: {
        status: "Đã phản hồi",
        admin_name: admin_name,
      },
    }).then((response) =>
      setCommentList((prev) => {
        prev[prev.findIndex((item) => item.id === id)] = comment;
        return [...prev];
      })
    );
  };
  // Delete User with ID
  const deleteComment = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/api/comments/${id}`,
    })
      .then((response) =>
        setCommentList((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === "edit") {
      editComment(values);
      return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "delete") {
      deleteComment(values.id);
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
            { accessor: "id", title: "Mã bình luận", width: "25%" },
            { accessor: "product", title: "Sản phẩm", width: 200 },
            { accessor: "username", title: "Tài khoản", width: 200 },
            { accessor: "comment", title: "Bình luận", width: 500 },
            { accessor: "status", title: "Trạng thái", width: 150 },
            //{ accessor: "updated_at", title: "Cập nhật lần cuối", width: "100%", sortable:true , render: ({ updated_at }) => dayjs(updated_at).format('DD-MM-YYYY HH:mm:ss')},
            {
              accessor: "actions",
              title: <Text class="text-center">Thao tác</Text>,
              textAlignment: "right",
              render: (item) => (
                <Group spacing={4} position="right" noWrap>
                  <ActionIcon
                    data-bs-toggle="modal"
                    data-bs-target="#viewModal"
                    onClick={() => setValues(item)}
                    color="green"
                  >
                    <GrIcons.GrView size={16} />
                  </ActionIcon>

                  <ActionIcon
                    data-bs-toggle="modal"
                    data-bs-target="#replyModal"
                    onClick={() => setValues(item)}
                    color="blue"
                  >
                    <BiIcons.BiReply size={16} />
                  </ActionIcon>

                  <ActionIcon
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => setValues(item)}
                    color="red"
                  >
                    <BiIcons.BiTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          totalRecords={commentList.length}
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
                <p class="text-secondary m-0">Mã bình luận:</p>
                <p class="text-primary m-0 ms-auto">{values.id}</p>
              </div>

              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên sản phẩm:</p>
                <p class="text-primary m-0 ms-auto">{values.product}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên tài khoản:</p>
                <p class="text-primary m-0 ms-auto">{values.username}</p>
              </div>

              <div class="d-flex flex-column">
                <p class="text-secondary m-0">Bình luận:</p>
                <p class="text-primary m-0 me-auto">{values.comment}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Trạng thái:</p>
                <p class="text-primary m-0 ms-auto">{values.status}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Người phản hồi (nếu có):</p>
                <p class="text-primary m-0 ms-auto">{values.admin_name}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Cập nhật gần nhất:</p>
                <p class="text-primary m-0 ms-auto">{values.updated_at}</p>
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

      {/* Reply */}
      <div
        class="modal fade"
        id="replyModal"
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
                Xác nhận phản hồi
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
                Xác nhận đã phản hồi bình luận số
                <span class="text-warning fw-bold">"{values.id}"</span> ?
              </p>
              <p class="fst-italic">
                Trạng thái phản hồi kèm tên quản trị viên sẽ được cập nhật sau
                khi xác nhận.
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
                class="btn btn-warning"
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
                <span class="text-danger fw-bold">"{values.id}"</span> ?
              </p>
              <p class="fst-italic">
                Sau khi xác nhận, thủ tục này sẽ không thể hoàn tác.
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
const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
