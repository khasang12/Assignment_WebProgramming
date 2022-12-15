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
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const PAGE_SIZES = [10, 15, 20];

export function NewsTable() {
  // States
  const [newsList, setNewsList] = useState([]); // News List (to be delivered by DB)
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]); // Page Size
  const [records, setRecords] = useState(newsList.slice(0, pageSize)); // Records (to be inserted into table)
  const [query, setQuery] = useState(""); // Query Search string
  const [debouncedQuery] = useDebouncedValue(query, 200); // Debounce effect
  const initValues = {
    // Default Values for a News
    id: 0,
    admin_name: JSON.parse(sessionStorage.getItem("user"))["name"],
    content: "",
    thumbnail: "",
    title:""
  };
  const [page, setPage] = useState(1); // Current Page
  const [sortStatus, setSortStatus] = useState({
    // Sorting Status
    columnAccessor: "price",
    direction: "asc",
  });
  const [done, setDone] = useState({ status: false, msg: "empty form" }); // Validation
  const [values, setValues] = useState(initValues); // Dynamic Values to be clicked/ changed/ inserted

  // Effects
  // Get all Data after FIRST LOADING for 1 second
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      getNewsList();
    }, 1000);
    return () => window.clearTimeout(timeoutID);
  }, []);
  // Set page size according to chosen size
  useEffect(() => {
    setPage(1);
  }, [pageSize]);
  //Pagination Effect
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(newsList.slice(from, to));
  }, [page, pageSize, records]);
  // Table search
  useEffect(() => {
    setRecords(
      newsList.filter(({ id, admin_name }) => {
        if (
          debouncedQuery !== "" &&
          !`${id} ${admin_name}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, records]);
  // Sorting
  useEffect(() => {
    const data = sortBy(newsList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);
  // Form validation
  useEffect(() => {
    const { id, admin_name, content, thumbnail, title } = values;
    if (id === "") {
      setDone({ status: false, msg: "Vui lòng nhập mã số" });
    } else if (title === undefined || title === "") {
      setDone({ status: false, msg: "Vui lòng gõ tiêu đề" });
    } else if (content === undefined || content === "") {
      setDone({ status: false, msg: "Vui lòng nhập nội dung bản tin" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

  // RESTful API for News
  // Get All News
  const getNewsList = async () => {
    await axios
      .get("http://localhost:8080/api/news/all")
      .then((response) => setNewsList(response.data))
      //.then(setRecords(newsList))
      .catch((res) => alert(res));
  };
  // Insert News
  const addNews = (news) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/news/",
      data: {
        admin_name: news["admin_name"] || "",
        title: news["title"] || "",
        content: news["content"] || "",
        thumbnail: news["thumbnail"] || "",
      },
    })
      .then((response) => getNewsList())
      .catch((res) => alert(res));
  };
  // Edit News with ID
  const editNews = (news) => {
    const id = news["id"];
    axios({
      method: "put",
      url: `http://localhost:8080/api/news/${id}`,
      data: {
        id : id,
        admin_name: JSON.parse(sessionStorage.getItem("user"))["name"] || "",
        title: news["title"] || "",
        content: news["content"] || "",
        thumbnail: news["thumbnail"] || "",
      },
    }).then((response) =>
      setNewsList((prev) => {
        prev[prev.findIndex((item) => item.id === id)] = news;
        return [...prev];
      })
    );
  };
  // Delete News with ID
  const deleteNews = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/api/news/${id}`,
    })
      .then((response) =>
        setNewsList((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

  // Events
  // Submit with changes: Add, Edit, Delete
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
    if (event.target.name === "add") {
      if (done["status"] === false)
        return toast.error(done["msg"], toastOptions);
      addNews(values);
      return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "edit") {
      if (done["status"] === false)
        return toast.error(done["msg"], toastOptions);
      editNews(values);
      return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "delete") {
      deleteNews(values.id);
      return toast.success("Cập nhật thành công", toastOptions);
    }
  };
  // Track user's keystroke
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Box sx={{ height: 600 }}>
        {/* SearchBar and AddNews Button */}
        <div class="my-2">
          <TextInput
            sx={{ flexBasis: "30%" }}
            placeholder="Nhập mã tin hoặc người đăng để tìm bài viết..."
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary openmodal mt-0 mb-5"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
          onClick={() => setValues({ initValues })}
        >
          Thêm tin
        </button>

        {/* Table */}
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
            { accessor: "id", title: "Mã tin đăng", width: "15%" },
            { accessor: "title", title: "Tiêu đề", width: 400 },
            { accessor: "thumbnail", title: "Thumbnail", width: "100%" },
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
                    data-bs-target="#editModal"
                    onClick={() => setValues(item)}
                    color="blue"
                  >
                    <AiIcons.AiOutlineEdit size={16} />
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
          totalRecords={newsList.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Box>

      {/* View Modal */}
      <div
        class="modal fade"
        id="viewModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Thông tin bài viết
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
                <p class="text-primary m-0 ms-auto">{values.title}</p>
              </div>
              <div class="d-flex flex-column">
                <p class="text-secondary m-0">Thumbnail:</p>
                <p class="text-primary m-0 me-auto">{values.thumbnail}</p>
              </div>
              <div class="d-flex flex-column">
                <p class="text-secondary m-0">Nội dung:</p>
                <p class="text-primary m-0 text-justify">
                  <SunEditor
                    disable={true}
                    enableToolbar={false}
                    showToolbar={false}
                    setContents={values.content}
                    width="100%"
                    height="100%"
                    setOptions={{ resizingBar: false, showPathLabel: false }}
                  />
                </p>
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

      {/* Add Modal */}
      <div
        class="modal fade"
        id="addModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Thêm bài đăng
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="title" className="mt-2 form-label">
                Tác giả
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tác giả"
                name="admin_name"
                onChange={handleChange}
              />
              <label htmlFor="title" className="mt-2 form-label">
                Tiêu đề
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tiêu đề"
                name="title"
                onChange={handleChange}
              />

              <label htmlFor="thumbnail" className="mt-2 form-label">
                Thumbnail
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Link hình ảnh"
                name="thumbnail"
                onChange={handleChange}
              />

              <label htmlFor="category" className="mt-2 form-label">
                Nội dung
              </label>
              <SunEditor
                name="content"
                showToolbar={true}
                onChange={(content) => {
                  //console.log(content)
                  setValues((prev) => ({ ...prev, content: content }));
                }}
                setDefaultStyle="height: auto"
                setOptions={{
                  buttonList: [
                    [
                      "undo",
                      "redo",
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "list",
                      "align",
                      "fontSize",
                      "formatBlock",
                      "table",
                      "image",
                      "link",
                      "fontColor",
                      "hiliteColor",
                    ],
                  ],
                }}
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
                name="add"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <div
        class="modal fade"
        id="editModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
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
              <label htmlFor="id" className="mt-2 form-label">
                ID
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="ID"
                name="id"
                onChange={handleChange}
                value={values.id}
                disabled
              />
              <label htmlFor="title" className="mt-2 form-label">
                Tác giả
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tác giả"
                name="admin_name"
                onChange={handleChange}
                value={JSON.parse(sessionStorage.getItem("user"))["name"]}
                disabled
              />
              <label htmlFor="title" className="mt-2 form-label">
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
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Thumbnail
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

              <label htmlFor="category" className="mt-2 form-label">
                Nội dung
              </label>
              <SunEditor
                name="content"
                setContents={values.content}
                showToolbar={true}
                onChange={(content) => {
                  //console.log(content)
                  setValues((prev) => ({ ...prev, content: content }));
                }}
                setDefaultStyle="height: auto"
                setOptions={{
                  buttonList: [
                    [
                      "undo",
                      "redo",
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "list",
                      "align",
                      "fontSize",
                      "formatBlock",
                      "table",
                      "image",
                      "link",
                      "fontColor",
                      "hiliteColor",
                    ],
                  ],
                }}
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

      {/* Delete Modal*/}
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
                Xóa tin <span class="text-danger fw-bold">"{values.id}"</span> ?
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
