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
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PAGE_SIZES = [10, 15, 20];

export function AccountsTable() {
  const [accountList, setAccountList] = useState([]);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const initValues = {
    //for new item to be added
    id: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    birthday: "",
    username: "",
    password: "",
    address: "",
  };
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(accountList.slice(0, pageSize));
  const [values, setValues] = useState(initValues);

  
  // Effects
  useEffect(() => {
    setPage(1);
  }, [pageSize]);
  // Get all Data after FIRST LOADING for 1 second
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      getAccountsList();
    }, 1000);
    return () => window.clearTimeout(timeoutID);
  }, []);
  //Pagination
  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(accountList.slice(from, to));
  }, [page, pageSize, records]);

  // Table search
  useEffect(() => {
    setRecords(
      accountList.filter(({ firstName, lastName, email }) => {
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

  const getAccountsList = async () => {
    await axios
      .get("http://localhost:8080/api/users/all")
      .then((response) => setAccountList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  // Delete User with ID
  const deleteUser = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/api/users/${id}`,
    })
      .then((response) =>
        setAccountList((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

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
      deleteUser(values.id);
      return toast.success("Cập nhật thành công", toastOptions);
    }
    else if (event.target.name === "ban"){
      return toast.warning("Cập nhật thành công", toastOptions);
    }
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
            { accessor: "id", title: "Mã tài khoản", width: "40%" },
            { accessor: "username", title: "Tên tài khoản", width: 300 },
            { accessor: "email", title: "Email", width: 300},
            { accessor: "last_name", title: "Họ", width: 200},
            { accessor: "first_name", title: "Tên", width: 200 },
            { accessor: "birthday", title: "Ngày sinh", width: "100%"},
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
                    data-bs-target="#banModal"
                    onClick={() => setValues(item)}
                    color="yellow"
                  >
                    <HiIcons.HiBan size={16} />
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
          totalRecords={accountList.length}
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
                <p class="text-primary m-0 ms-auto">{values.id}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Tên tài khoản:</p>
                <p class="text-primary m-0 ms-auto">{values.username}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Họ và tên:</p>
                <p class="text-primary m-0 ms-auto">{values.last_name + " " + values.first_name}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Địa chỉ email:</p>
                <p class="text-primary m-0 ms-auto">{values.email}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Ngày sinh:</p>
                <p class="text-primary m-0 ms-auto">{values.birthday}</p>
              </div>
              <div class="d-flex flex-row">
                <p class="text-secondary m-0">Địa chỉ:</p>
                <p class="text-primary m-0 ms-auto">{values.address}</p>
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
                Cấm mua hàng với tài khoản <span class="text-warning fw-bold">"{values.username}"</span> trong thời gian 7 ngày ?
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
                name="ban"
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
                Xóa người dùng<span class="text-danger fw-bold">"{values.username}"</span> ?
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
