import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Home({ navbarAdmin }) {
  const [dataLine, setDataLine] = useState({});
  const [dataPie, setDataPie] = useState({});

  useEffect(() => {
    setDataLine({
      labels: labelsLineChart,
      datasets: [
        {
          label: "Doanh thu",
          data: labelsLineChart.map(() =>
            faker.datatype.number({ min: 0, max: 10000000 })
          ),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          yAxisID: "y",
        },
        {
          label: "Sản phẩm",
          data: labelsLineChart.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          yAxisID: "y1",
        },
      ],
    });
    setDataPie({
      labels: labelsDoughnut,
      datasets: [
        {
          label: "Pieee",
          data: labelsDoughnut.map(() =>
            faker.datatype.number({ min: 1, max: 1000 })
          ),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div className={"px-5 pt-2 " + (navbarAdmin ? "fade" : "")}>
      <h1>Welcome back, Sang !</h1>
      <div className="d-flex flex-column justify-content-lg-between align-items-center flex-lg-row gap-lg-5">
        <div class="col col-sm-6 col-md-6 col-lg-3 card mt-3">
          <div class="card-body text-center">
            <span
              class="position-absolute m-0 top-0 start-50 translate-middle badge rounded-pill bg-success"
              style={{ "font-size": "1.5em" }}
            >
              <AiIcons.AiOutlineDollarCircle></AiIcons.AiOutlineDollarCircle>
            </span>
            <div className="ms-2 mt-2 text-center">
              <h4 className=" card-title">Doanh thu</h4>
              <h6 class=" fst-italic card-subtitle mb-2">
                08/10/2022 - 08/11/2022
              </h6>
              <h1 className="">180.000.000đ</h1>
              <p className="fs-6  card-text">+10%</p>
            </div>
          </div>
        </div>

        <div class="col col-sm-6 col-md-6 col-lg-3 card mt-3">
          <div class="card-body text-center">
            <span
              class="position-absolute m-0 top-0 start-50 translate-middle badge rounded-pill bg-warning"
              style={{ "font-size": "1.5em" }}
            >
              <BiIcons.BiSearchAlt></BiIcons.BiSearchAlt>
            </span>
            <div className="ms-2 mt-2 text-center">
              <h4 className=" card-title">Lượt truy cập</h4>
              <h6 class=" fst-italic card-subtitle mb-2">
                08/10/2022 - 08/11/2022
              </h6>
              <h1 className="">1998</h1>
              <p className="fs-6  card-text">+210 trong tuần qua</p>
            </div>
          </div>
        </div>

        <div class="col col-sm-6 col-md-6 col-lg-3 card mt-3 border">
          <div class="card-body text-center">
            <span
              class="position-absolute m-0 top-0 start-50 translate-middle badge rounded-pill bg-primary"
              style={{ "font-size": "1.5em" }}
            >
              <TbIcons.TbTruckDelivery></TbIcons.TbTruckDelivery>
            </span>
            <div className="ms-2 mt-2 text-center">
              <h4 className="card-title">Tổng đơn hàng</h4>
              <h6 class="fst-italic card-subtitle mb-2">
                08/10/2022 - 08/11/2022
              </h6>
              <h1 className="">200</h1>
              <p className="fs-6 card-text">+15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mb-3 flex-column-reverse flex-lg-row mt-3">
        <div className="col-12 col-lg-6">
          {dataLine.datasets ? (
            <Line
              style={{ height: "300px" }}
              data={dataLine}
              options={optionsLineChart}
            />
          ) : (
            ""
          )}
        </div>
        <div className="justify-content-center col-12 col-md-6">
            <div className="d-flex flex-column flex-md-row">
              <div className="col-12 col-lg-6">
                {dataPie.datasets ? (
                  <Doughnut
                    style={{ width: "25vw" }}
                    data={dataPie}
                    options={optionsDoughnut}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="col-12 col-lg-6">
                {dataPie.datasets ? (
                  <Doughnut
                    style={{ height: "300px" }}
                    data={dataPie}
                    options={optionsDoughnut}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

const optionsLineChart = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Doanh thu và Số lượng sản phẩm xuất kho",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const optionsDoughnut = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Doanh thu theo phân loại",
    },
  },
};

const labelsLineChart = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const labelsDoughnut = ["Laptop", "Điện thoại", "Phụ kiện"];
