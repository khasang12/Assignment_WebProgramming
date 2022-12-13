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
import uuid from "react-uuid";

const PAGE_SIZES = [10, 15, 20];

export function ProductsTable() {
  // States
  const [productList, setProductList] = useState([]); // Product List (to be delivered by DB)
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]); // Page Size
  const [records, setRecords] = useState(productList.slice(0, pageSize)); // Records (to be inserted into table)
  const [query, setQuery] = useState(""); // Query Search string
  const [debouncedQuery] = useDebouncedValue(query, 200); // Debounce effect
  const initValues = {
    // Default Values for a Product
    id: 0,
    name: "",
    price: "",
    quantity: "",
    overall_rating: "",
    thumbnail: "",
    brand: "",
    cpu: "",
    gpu: "",
    ram: "",
    disk: "",
    description: "",
    num_rates: "",
    weight: "",
    screen_tech: "",
    screen_size: "",
    os: "",
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
      getProductsList();
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
    setRecords(productList.slice(from, to));
  }, [page, pageSize, records]);
  // Table search
  useEffect(() => {
    setRecords(
      productList.filter(({ id, name }) => {
        if (
          debouncedQuery !== "" &&
          !`${id} ${name}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, productList]);
  // Sorting
  useEffect(() => {
    const data = sortBy(productList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus,productList]);
  // Form validation
  useEffect(() => {
    const { name, price, quantity } = values;
    if (name === undefined || name === "") {
      setDone({ status: false, msg: "Vui lòng nhập tên sản phẩm" });
    } else if (price === undefined || price === "") {
      setDone({ status: false, msg: "Vui lòng nhập giá bán" });
    } else if (isNaN(price)) {
      setDone({ status: false, msg: "Giá bán là 1 con số" });
    } else if (quantity === undefined || quantity === "") {
      setDone({ status: false, msg: "Vui lòng nhập số lượng" });
    } else if (isNaN(quantity)) {
      setDone({ status: false, msg: "Số lượng là 1 con số" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

  // RESTful API for Product
  // Get All Product
  const getProductsList = async () => {
    await axios
      .get("http://localhost:8080/api/products/all")
      .then((response) => setProductList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  // Insert Product
  const addProduct = (products) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/products/",
      data: {
        id: uuid(),
        thumbnail: products["thumbnail"] || "",
        name: products["name"] || "",
        price: products["price"] || 0,
        quantity: products["quantity"] || 0,
        overall_rating: products["overall_rating"] || 0,
        brand: products["brand"] || "",
        cpu: products["cpu"] || "",
        gpu: products["gpu"] || "",
        ram: products["ram"] || "",
        disk: products["disk"] || "",
        description: products["description"] || "",
        num_rates: products["num_rates"] || 0,
        weight: products["weight"] || 0,
        screen_tech: products["screen_tech"] || "",
        screen_size: products["screen_size"] || "",
        os: products["os"] || "",
      },
    })
      .then((response) => getProductsList())
      .catch((res) => alert(res));
  };
  // Edit Product with ID
  const editProduct = (products) => {
    const id = products["id"];
    axios({
      method: "put",
      url: `http://localhost:8080/api/products/${id}`,
      data: {
        thumbnail: products["thumbnail"] || "",
        name: products["name"] || "",
        price: products["price"] || 0,
        quantity: products["quantity"] || 0,
        overall_rating: products["overall_rating"] || 0,
        brand: products["brand"] || "",
        cpu: products["cpu"] || "",
        gpu: products["gpu"] || "",
        ram: products["ram"] || "",
        disk: products["disk"] || "",
        description: products["description"] || "",
        num_rates: products["num_rates"] || 0,
        weight: products["weight"] || 0,
        screen_tech: products["screen_tech"] || "",
        screen_size: products["screen_size"] || "",
        os: products["os"] || "",
      },
    }).then((response) =>
      setProductList((prev) => {
        prev[prev.findIndex((item) => item.id === id)] = products;
        return [...prev];
      })
    );
  };
  // Delete Product with ID
  const deleteProduct = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/api/products/${id}`,
    })
      .then((response) =>
        setProductList((prev) => prev.filter((item) => item.id !== id))
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
      addProduct(values);
      return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "edit") {
      if (done["status"] === false)
        return toast.error(done["msg"], toastOptions);
      editProduct(values);
      return toast.success("Cập nhật thành công", toastOptions);
    } else if (event.target.name === "delete") {
      deleteProduct(values.id);
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
        {/* SearchBar and AddProduct Button */}
        <div class="my-2">
          <TextInput
            sx={{ flexBasis: "30%" }}
            placeholder="Nhập mã hoặc tên sản phẩm..."
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
          Thêm sản phẩm
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
            { accessor: "id", title: "Mã sản phẩm", width: "25%" },
            { accessor: "name", title: "Tên", width: 400 },
            { accessor: "price", title: "Giá bán", width: 200 , sortable:true},
            { accessor: "quantity", title: "Số lượng tồn", width: 200, sortable:true },
            { accessor: "overall_rating", title: "Đánh giá", width: "100%", sortable:true },
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
          totalRecords={productList.length}
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
                <p class="text-primary m-0 ms-2 me-auto">{values.id}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên sản phẩm:</p>
                <p class="text-primary m-0 ms-2 me-auto">{values.name}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Giá bán:</p>
                <p class="text-primary m-0 ms-2 me-auto">{values.price}VND</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Số lượng tồn:</p>
                <p class="text-primary m-0 ms-2 me-auto">{values.quantity}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Đánh giá:</p>
                <p class="text-primary m-0 ms-2 me-auto">
                  {values.overall_rating}
                </p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Lượt đánh giá:</p>
                <p class="text-primary m-0 me-auto">{values.num_rates}</p>
              </div>
              <div class="d-flex flex-column overflow-visible">
                <p class="text-secondary m-0">Thumbnail:</p>
                <p class="text-primary m-0 me-auto overflow-auto w-100">
                  {values.thumbnail}
                </p>
              </div>
              <div class="d-flex flex-column ">
                <p class="text-secondary m-0">Mô tả:</p>
                <p class="text-primary m-0 me-auto overflow-visible">
                  {values.description}
                </p>
              </div>
              <hr />
              <div class="d-flex flex-column">
                <p class="text-secondary m-0">Thông số chi tiết:</p>
              </div>
              <div className="ms-2 py-2">
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">Hãng:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.brand}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">Hệ điều hành:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.os}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">CPU:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.cpu}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">GPU:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.gpu}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">RAM:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.ram}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">DISK:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.disk}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">Khối lượng:</p>
                  <p class="text-primary m-0 ms-2 me-auto">{values.weight}</p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">Công nghệ màn hình:</p>
                  <p class="text-primary m-0 ms-2 me-auto">
                    {values.screen_tech}
                  </p>
                </div>
                <div class="d-flex flex-row">
                  <p class="text-secondary m-0">Kích thước:</p>
                  <p class="text-primary m-0 ms-2 me-auto">
                    {values.screen_size}
                  </p>
                </div>
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Thêm sản phẩm
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
                Tên sản phẩm
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Giá bán
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="price"
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Số lượng
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="quantity"
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Thumbnail
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="thumbnail"
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Mô tả
              </label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Đánh giá
              </label>
              <input
                type="text"
                className="form-control"
                name="overall_rating"
                readOnly
                value={0}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Lượt đánh giá
              </label>
              <input
                type="text"
                className="form-control"
                name="num_rates"
                readOnly
                value={0}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Hệ điều hành
              </label>
              <input
                type="text"
                className="form-control"
                name="os"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Hãng
              </label>
              <input
                type="text"
                className="form-control"
                name="brand"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                CPU
              </label>
              <input
                type="text"
                className="form-control"
                name="cpu"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                GPU
              </label>
              <input
                type="text"
                className="form-control"
                name="gpu"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                RAM
              </label>
              <input
                type="text"
                className="form-control"
                name="ram"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Disk
              </label>
              <input
                type="text"
                className="form-control"
                name="disk"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Khối lượng
              </label>
              <input
                type="text"
                className="form-control"
                name="weight"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Công nghệ màn hình
              </label>
              <input
                type="text"
                className="form-control"
                name="screen_tech"
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Kích thước
              </label>
              <input
                type="text"
                className="form-control"
                name="screen_size"
                onChange={handleChange}
              />

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
              <label htmlFor="id" className="mt-2 form-label">
                ID
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="ID"
                name="id"
                readOnly
                value={values.id}
                onChange={handleChange}
              />
              <label htmlFor="title" className="mt-2 form-label">
                Tên sản phẩm
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="name"
                value={values.name}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Giá bán
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="price"
                value={values.price}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Số lượng
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Thumbnail
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="thumbnail"
                value={values.thumbnail}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Mô tả
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={values.description || ""}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Đánh giá
              </label>
              <input
                type="text"
                className="form-control"
                name="overall_rating"
                readOnly
                value={values.overall_rating}
                onChange={handleChange}
              />

              <label htmlFor="title" className="mt-2 form-label">
                Lượt đánh giá
              </label>
              <input
                type="text"
                className="form-control"
                name="num_rates"
                readOnly
                value={values.num_rates}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Hệ điều hành
              </label>
              <input
                type="text"
                className="form-control"
                name="os"
                value={values.os}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Hãng
              </label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={values.brand}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                CPU
              </label>
              <input
                type="text"
                className="form-control"
                name="cpu"
                value={values.cpu}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                GPU
              </label>
              <input
                type="text"
                className="form-control"
                name="gpu"
                value={values.gpu}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                RAM
              </label>
              <input
                type="text"
                className="form-control"
                name="ram"
                value={values.ram}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Disk
              </label>
              <input
                type="text"
                className="form-control"
                name="disk"
                value={values.disk}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Khối lượng
              </label>
              <input
                type="text"
                className="form-control"
                name="weight"
                value={values.weight}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Công nghệ màn hình
              </label>
              <input
                type="text"
                className="form-control"
                name="screen_tech"
                value={values.screen_tech}
                onChange={handleChange}
              />
              <label htmlFor="thumbnail" className="mt-2 form-label">
                Kích thước
              </label>
              <input
                type="text"
                className="form-control"
                name="screen_size"
                value={values.screen_size}
                onChange={handleChange}
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
                Xóa sản phẩm
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
                Xóa sản phẩm{" "}
                <span class="text-danger fw-bold">"{values.name}"</span> ?
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
                Xóa sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
