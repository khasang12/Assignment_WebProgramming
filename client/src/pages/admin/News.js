import React, { useState } from "react";
import { NewsTable } from "../../components/admin/NewsTable";

function News({ navbarAdmin }) {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await axios.get(`http://localhost/ltw-api/news/getall`);
  //   setData(res.data.data);
  // };

  // const addNews = (news) => {
  //   axios
  //     .post("http://localhost/ltw-api/news/", news, environment.headers)
  //     .then((response) => getData())
  //     .catch((res) => alert(res));
  // };

  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [news, setNews] = useState({ title: "", thumbnail: "", content: "" });

  const closeHandler = () => {
    setNews({ title: "", thumbnail: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      //addNews(news);
    }
    setNews({ news_id: "", title: "", content: "", thumbnail: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const setContent = (e, content) => {
    setNews((prev) => ({ ...prev, content: content }));
  };

  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h2 className="text-center my-4">Quản lý tin tức</h2>
      <NewsTable />
    </div>
  );
}

export default News;
