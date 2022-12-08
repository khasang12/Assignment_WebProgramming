import axios from "axios";
import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";

function Resource({ navbarAdmin }) {
  const UPLOAD_ENDPOINT = "http://localhost:8080/api/upload";
  const initFlag = {
    slider1: false,
    slider2: false,
    slider3: false,
    news1: false,
    news2: false,
    news3: false,
    logo: false,
    demo: false,
  };
  const [response, setResponse] = useState([]);
  const [flag, setFlag] = useState(initFlag);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (flag===initFlag){
      alert('You have not submitted any files!!')
      return
    }
    for (const key in flag) {
      if (flag[key] != false) {
        if (key != flag[key]["name"].slice(0, -4)) {
          alert("Wrong filename for " + key);
          return;
        }
        uploadFile(key, flag[key]);
      }
    }
    alert("Files updated");
  };
  
  const uploadFile = async (key, file) => {
    const formData = new FormData();
    formData.append("file[]", file);
    return await axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setResponse([...response, res.data]);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleChange = (e) => {
    setFlag({ ...flag, [e.target.name]: e.target.files[0] });
  };
  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý tài nguyên</h2>
      <form action="put" onSubmit={handleSubmit}>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Trang chủ
              </button>
            </h2>

            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Slider 1
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    name="slider1"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    slider[x].png với x là số thứ tự
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Slider 2
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    name="slider2"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    slider[x].png với x là số thứ tự
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Slider 3
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    name="slider3"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    slider[x].png với x là số thứ tự
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Bìa tin tức
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Thumbnail 1
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="news1"
                    onChange={handleChange}
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    news[x].png với x là số thứ tự
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Thumbnail 2
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="news2"
                    onChange={handleChange}
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    news[x].png với x là số thứ tự
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Thumbnail 3
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="news3"
                    onChange={handleChange}
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi:
                    news[x].png với x là số thứ tự
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Các tài nguyên khác
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Logo trang web BKZone
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    name="logo"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi: logo.jpg
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Video giới thiệu
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="demo"
                    onChange={handleChange}
                  />
                  <div id="emailHelp" class="form-text">
                    Vui lòng sửa tên file hoặc định dạng trước khi gửi: demo.mp4
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="mt-4 btn btn-primary">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}

export default Resource;
