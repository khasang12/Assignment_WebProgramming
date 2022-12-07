import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";


export const SidebarData = [
  {
    title: "Tổng quan",
    path: "/admin",
    icon: <BiIcons.BiTrendingUp />,
    cName: "nav-text",
  },
  {
    title: "Sản phẩm",
    path: "/admin/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Tài khoản",
    path: "/admin/accounts",
    icon: <MdIcons.MdSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Đơn hàng",
    path: "/admin/orders",
    icon: <BiIcons.BiReceipt />,
    cName: "nav-text",
  },
  {
    title: "Tin tức",
    path: "/admin/news",
    icon: <BiIcons.BiNews />,
    cName: "nav-text",
  },
  {
    title: "Bình luận",
    path: "/admin/comments",
    icon: <BiIcons.BiCommentDots />,
    cName: "nav-text",
  },
  {
    title: "Tài nguyên",
    path: "/admin/resource",
    icon: <AiIcons.AiOutlineDatabase />,
    cName: "nav-text",
  },
  {
    title: "Cài đặt",
    path: "/admin/settings",
    icon: <AiIcons.AiOutlineSetting />,
    cName: "nav-text",
  },
];

export const NotiData = [
  {
    title:"Đơn hàng SK12 cần được xác nhận",
    time:"2 giờ trước",
    price:"12.345.000đ"
  },
  {
    title:"Đơn hàng SK12 cần được xác nhận",
    time:"1 ngày trước",
    price:"12.345.000đ"
  },
  {
    title:"Đơn hàng SK12 cần được xác nhận",
    time:"1 tuần trước",
    price:"12.345.000đ"
  }
]
