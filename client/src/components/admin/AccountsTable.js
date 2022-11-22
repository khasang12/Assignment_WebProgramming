import {
  Modal,
  Box,
  TextInput,
  Text,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { DataTable} from "mantine-datatable";
import { useEffect, useState } from "react";
import { UserData } from "./data";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_SIZES = [10, 15, 20];

export function AccountsTable() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);
  const initValues = {
    //for new item to be added
    user_id: "",
    email: "",
    firstName: "",
    lastName: "",
    subscriptionTier: "",
  };
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(UserData.slice(0, pageSize));

  const [product, setProduct] = useState({});
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [values, setValues] = useState(initValues);

  //Pagination
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(UserData.slice(from, to));
  }, [page, pageSize]);

  // Table search
  useEffect(() => {
    setRecords(
      UserData.filter(({ firstName, lastName, email }) => {
        if (
          debouncedQuery !== "" &&
          !`${firstName} ${lastName} ${email}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  // Form validation
  // useEffect(() => {
  //   const { user_id, email, firstName, lastName, subscriptionTier } = values;
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
            placeholder="Nhập tên hoặc email để tìm tài khoản..."
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
            { accessor: "user_id", title: "Mã tài khoản", width: "35%" },
            { accessor: "userName", title: "Tên tài khoản", width: "200" },
            { accessor: "email", title: "Email", width: 200},
            { accessor: "lastName", title: "Họ", width: 100},
            { accessor: "firstName", title: "Tên", width: 300 },
            { accessor: "subscriptionTier", title: "Hạng", width: "100%"},
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
                    data-bs-target="#banModal"
                    onClick={() => setProduct(item)}
                    color="yellow"
                  >
                    <HiIcons.HiBan size={16} />
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
          totalRecords={UserData.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
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
                Thông tin tài khoản
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
                <p class="text-primary m-0 ms-auto">{product.user_id}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên tài khoản:</p>
                <p class="text-primary m-0 ms-auto">{product.userName}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Họ và tên:</p>
                <p class="text-primary m-0 ms-auto">{product.lastName + " " + product.firstName}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Địa chỉ email:</p>
                <p class="text-primary m-0 ms-auto">{product.email}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Hạng thành viên:</p>
                <p class="text-primary m-0 ms-auto">{product.subscriptionTier}</p>
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
      
      {/* Ban */}
      <div
        class="modal fade"
        id="banModal"
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
                Cấm mua hàng
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
                Cấm mua hàng với tài khoản <span class="text-warning fw-bold">"{product.userName}"</span> trong thời gian 7 ngày ?
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
                class="btn btn-warning"
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
                Xóa tài khoản
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
                Xóa người dùng<span class="text-danger fw-bold">"{product.userName}"</span> ?
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
                Xóa tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
