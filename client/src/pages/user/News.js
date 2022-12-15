import img from "../../assets/blog-1.jpg";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
function Form({news}) {
  return (
    <div className="row card card-body d-flex flex-row mb-4">
      <div className="col-lg-4">
        <div className="blog-item-thumbnail">
          <a href="/tren-tay-ssd-samsung-990-pro-chien-binh-moi-trong-dong-flagship-2022">
            <picture>
              <img
                src={news.thumbnail}
                style={{ maxWidth: "100%" }}
                className="img-responsive"
                title={news.title}
                alt="Trên tay SSD SAMSUNG 990 PRO - Chiến binh mới trong dòng Flagship 2022"
              />
            </picture>
          </a>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="blog-item-info">
          <h4 className="blog-item-name">
            <Link to={`/newsdetail?id=${news.id}`}>
              {news.title}
            </Link>
          </h4>
          <div className="date d-inline-flex flex-row align-items-center">
            <FaIcons.FaRegCalendarTimes className="mr-1 p-0" /> Friday,
            <div className="news_home_content_short_time"> 02/12/2022</div>
            <span className="cmt_count_blog align-items-center">
              <FaIcons.FaUserAlt className="mr-1 p-0" />
              Đăng bởi: Huỳnh Ngọc
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
  }
function UNews() {
  const [news, setNews] = useState([]) 
  async function getNews() {
    return await axios({
      method: "get",
      url: "http://localhost:8080/api/news/all",
      data: {},
  })
  .then((res) => res.data)
  }
  useEffect(()=>{
    getNews().then((res) => {setNews(res)})
  }, [])
  console.log(news);
  return (
    <div className="container">
      

      <div className="row g-5">
        <div className="col-md-9">
          <div className="row mb-2">
          {news.map((item, index) => (
            <Form key={index} news = {item}/>
          ))}
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-md-3">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Customize this section to tell your visitors a little bit about
                your publication, writers, content, or something else entirely.
                Totally up to you.
              </p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2021</a>
                </li>
                <li>
                  <a href="#">February 2021</a>
                </li>
                <li>
                  <a href="#">January 2021</a>
                </li>
                <li>
                  <a href="#">December 2020</a>
                </li>
                <li>
                  <a href="#">November 2020</a>
                </li>
                <li>
                  <a href="#">October 2020</a>
                </li>
                <li>
                  <a href="#">September 2020</a>
                </li>
                <li>
                  <a href="#">August 2020</a>
                </li>
                <li>
                  <a href="#">July 2020</a>
                </li>
                <li>
                  <a href="#">June 2020</a>
                </li>
                <li>
                  <a href="#">May 2020</a>
                </li>
                <li>
                  <a href="#">April 2020</a>
                </li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UNews;
