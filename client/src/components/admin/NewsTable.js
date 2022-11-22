import {
  Modal,
  Box,
  TextInput,
  Text,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import sortBy from "lodash/sortBy";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { NewsData } from "./data";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_SIZES = [10, 15, 20];

export function NewsTable() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);
  const initValues = {
    //for new item to be added
    news_id: "",
    category: "",
    title: "",
    price: 0,
    thumbnail: "",
    desc: "",
    quantity: 0,
  };
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(NewsData.slice(0, pageSize));
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "price",
    direction: "asc",
  });
  const [product, setProduct] = useState({});
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [values, setValues] = useState(initValues);

  //Pagination
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(NewsData.slice(from, to));
  }, [page, pageSize]);

  // Table search
  useEffect(() => {
    setRecords(
      NewsData.filter(({ content, title }) => {
        if (
          debouncedQuery !== "" &&
          !`${content} ${title}`
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
    const data = sortBy(NewsData, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  // Form validation
  useEffect(() => {
    const { news_id, title, content, thumbnail } = values;
    if (news_id === "") {
      setDone({ status: false, msg: "Vui lòng nhập mã số" });
    } else if (title === undefined || title === "") {
      setDone({ status: false, msg: "Vui lòng chọn tiêu đề" });
    } else if (content === undefined || content === "") {
      setDone({ status: false, msg: "Vui lòng nhập nội dung bản tin" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

  const handleSubmit = (event) => {
    console.log(values);
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    event.preventDefault();
    if (event.target.name === "edit") {
      if (done["status"] === false)
        return toast.error(done["msg"], toastOptions);
      else return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "delete") {
      return toast.success("Cập nhật thành công", toastOptions);
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Box sx={{ height: 600 }}>
        <div class="my-2">
          <TextInput
            sx={{ flexBasis: "30%" }}
            placeholder="Nhập tiêu đề hoặc nội dung để tìm..."
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary openmodal mt-0 mb-5"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          onClick={() => setValues({ initValues })}
        >
          Thêm tin
        </button>
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
            { accessor: "news_id", title: "Mã tin đăng", width: "15%" },
            { accessor: "title", title: "Tiêu đề", width: 200},
            { accessor: "content", title: "Nội dung", width: "50%" },
            { accessor: "thumbnail", title: "Đường dẫn", width: "100%"},
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
                    data-bs-target="#editModal"
                    onClick={() => setValues(item)}
                    color="blue"
                  >
                    <AiIcons.AiOutlineEdit size={16} />
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
          totalRecords={NewsData.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          // sortStatus={sortStatus}
          // onSortStatusChange={setSortStatus}
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
                Thông tin sản phẩm
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
                <p class="text-secondary m-0">Mã số:</p>
                <p class="text-primary m-0 ms-auto">{product.news_id}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tiêu đề:</p>
                <p class="text-primary m-0 ms-auto">{product.title}</p>
              </div>
              <div class="d-flex flex-column">
                <p class="text-secondary m-0">Nội dung:</p>
                <p class="text-primary m-0 ms-auto text-justify">{product.content}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Đường dẫn:</p>
                <p class="text-primary m-0 ms-auto">{product.thumbnail}</p>
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
                Chỉnh sửa thông tin
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="title" className="form-label">
                ID
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="ID"
                name="news_id"
                onChange={handleChange}
                value={values.news_id}
              />
              <label htmlFor="title" className="form-label">
                Tiêu đề
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tiêu đề"
                name="title"
                onChange={handleChange}
                value={values.title}
              />

              <label htmlFor="category" className="form-label">
                Nội dung
              </label>
              <textarea
                required
                type="text"
                className="form-control"
                placeholder="Phân loại"
                name="category"
                onChange={handleChange}
                value={values.content}
              />

              <label htmlFor="thumbnail" className="form-label">
                Hình ảnh
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Link hình ảnh"
                name="thumbnail"
                onChange={handleChange}
                value={values.thumbnail}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                class="btn btn-primary"
                data-bs-dismiss="modal"
                name="edit"
              >
                Chỉnh sửa
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
                Xóa tin đăng
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
                Xóa tin <span class="text-danger fw-bold">"{product.title}"</span> ?
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
                Xóa bản tin
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
