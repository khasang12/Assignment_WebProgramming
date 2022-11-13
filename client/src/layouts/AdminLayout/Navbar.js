import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData, NotiData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../../assets/logo.png";

export function AdminLayout({setNavbarAdmin}) {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setNavbarAdmin(!sidebar)
    setSidebar((sidebar) => !sidebar);
  };
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={toggleSidebar} />
        </Link>
        <img src={logo} alt="logo" className="logo" />
        <div className="profile">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-info me-2 me-md-5 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MdIcons.MdNotificationsNone />
              <span class="position-absolute top-0 start-sm-50 start-md-100 translate-middle badge rounded-pill bg-danger">
                +99 <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li className="text-center">Thông báo</li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              {NotiData.map((item, index) => {
                return (
                  <li key={index} className="lh-1 dropdown-item fs-6">
                    <p className="fw-bold">{item.title}</p>
                    <p className="fw-lighter fst-italic">
                      Thời gian: {item.time}
                    </p>
                  </li>
                );
              })}
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item text-center" href="#">
                  Xem thêm
                </a>
              </li>
            </ul>
          </div>

          <button
            className="logout btn btn-secondary me-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <BiIcons.BiLogOut />
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <BiIcons.BiArrowBack />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* <!-- Logout Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Xác nhận đăng xuất ?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Sau khi ấn nút, bạn sẽ thoát khỏi trang admin này.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng cửa sổ
              </button>
              <button type="button" class="btn btn-primary">
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
