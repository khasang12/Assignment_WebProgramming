import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ItemsList from "../Home/ItemList";
import RangeSlider from "react-bootstrap-range-slider";
import axios from "axios";

export default function SearchPage() {
  // States
  const initFilter = {
    sorted: "all",
    priceFrom: "all",
    priceTo: "all",
    os: "all",
    ram: "all",
    ssd: "all",
  };
  const [urlParams, setURLParams] = useSearchParams();
  const [itemList, setItemList] = useState([]);
  const [filter, setFilter] = useState(initFilter);

  // Effects
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {}, 1000);
    // get urlparams then call api
    // external api calls
    if (urlParams.get("brand")) {
      getItemListByBrand(urlParams.get("brand"))
    } else if (urlParams.get("priceFrom")) {
      if (urlParams.get("priceTo"))
         getItemListByPrice(urlParams.get("priceFrom"), urlParams.get("priceTo"))
      else getItemListByPrice(urlParams.get("priceFrom"),100000000)
    } else if (urlParams.get("cpu")) {
      getItemListByConfig(urlParams.get("cpu"))
    } else if (urlParams.get("filter")) {
      getItemListFiltered(filter)
    } else {
      getItemListByName(urlParams.get("s"))
    }
    // api called by filter
    return () => window.clearTimeout(timeoutID);
  }, [urlParams]);

  // Functions
  // API polling...
  const getItemListByName = async (name) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products/all?name=${name}`,
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListByBrand = async (brandname) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products/all?brand=${brandname}`,
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListByPrice = async (priceFrom, priceTo) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products/all?priceFrom=${priceFrom}&priceTo=${priceTo}`,
    })
      .then((response) => {
        console.log(response)
        setItemList(response.data)
      })
      .catch((res) => alert(res));
  };
  const getItemListByConfig = async (config) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products/all?cpu=${config}`,
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListFiltered = async () => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products/all?ram=${filter.ram}&disk=${filter.ssd}&os=${filter.os}&sorted=${filter.sorted}`,
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };

  // Event handler
  const onChangeHandler = (e) => {
    setFilter((filter) => ({ ...filter, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = async (e) => {
    if (parseInt(filter["priceFrom"]) > parseInt(filter["priceTo"])) {
      alert("Giá sàn không lớn hơn giá trần");
    } else {
      await getItemListFiltered()
    }
  };

  return (
    <div className="container w-full flex flex-column mt-3 text-center">
      <div className="w-full flex flex-column text-start pt-3">
        <div className="fs-2 w-100">
          Kết quả tìm kiếm cho :&nbsp;{" "}
          <span className="text-[#030391]">{urlParams.get("s")}</span>
        </div>
        {/* <div className="flex flex-row flex-wrap text-center text-md-start justify-start mt-2 mb-4">
          <button
            className={`rounded pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${
              searchMode === 1 ? btnActiveStyle : btnInactiveStyle
            }`}
            onClick={onClickSearchByNameBtn}
          >
            Tìm theo tên
          </button>
          <button
            className={`rounded pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${
              searchMode === 2 ? btnActiveStyle : btnInactiveStyle
            }`}
            onClick={onClickSearchByTagBtn}
          >
            Tìm theo nhãn
          </button>
        </div> */}
      </div>
      <div className="d-flex flex-column flex-md-row">
        {/* Filter Bar - Tablet & Desktop */}
        <div
          style={{ minWidth: "200px", height: "auto" }}
          className="d-none flex-shrink-0 border text-start py-2 col-3 d-md-flex flex-column flex-wrap justify-start mt-2 mb-4"
        >
          <div className="w-48 d-flex flex-column mr-16 mb-6">
            <div class="mb-3">
              <label for="sorted" class="form-label text-uppercase fw-bold">
                Sắp xếp:
              </label>
              <br />
              <select
                id="sorted"
                name="sorted"
                class="form-select"
                onChange={onChangeHandler}
                defaultValue="all"
                className="border-[#1488d8] border-2 py-1 px-4 rounded appearance-none w-75"
              >
                <option value="hot">Bán chạy nhất</option>
                <option value="priceDown">Giá giảm dần</option>
                <option value="priceUp">Giá tăng dần</option>
                <option value="all">Tất cả</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label text-uppercase fw-bold">
                Hệ điều hành
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="all"
                  name="os"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Tất cả
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="windows"
                  name="os"
                  id="flexCheckDefault"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Windows
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="linux"
                  name="os"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Linux
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="macOS"
                  name="os"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Mac OS
                </label>
              </div>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label text-uppercase fw-bold">
                RAM
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="all"
                  name="ram"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Tất cả
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="8"
                  name="ram"
                  id="flexCheckDefault"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  8 GB
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="16"
                  name="ram"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  16 GB
                </label>
              </div>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label text-uppercase fw-bold">
                SSD
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="all"
                  name="ssd"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Tất cả
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="128"
                  name="ssd"
                  id="flexCheckDefault"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  128 GB
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="256"
                  name="ssd"
                  id="flexCheckDefault"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  256 GB
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="512"
                  name="ssd"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  512 GB
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="1TB"
                  name="ssd"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  1 TB
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-secondary"
              onClick={onSubmitHandler}
            >
              Lọc sản phẩm
            </button>
          </div>
        </div>

        {/* Filter Bar - Mobile */}
        <div class="d-flex d-md-none mb-3">
          <label for="sorted" class="form-label text-uppercase fw-bold">
            Sắp xếp:
          </label>
          <br />
          <select
            id="sorted"
            style={{ width: "auto" }}
            class="form-select"
            onChange={onChangeHandler}
            name="sorted"
            defaultValue="all"
            className="border-[#1488d8] border-2 py-1 px-4 rounded w-sm-50 w-md-auto"
          >
            <option value="time" className="fs-6">
              Mới nhất
            </option>
            <option value="priceDown" className="fs-6">
              Giá giảm dần
            </option>
            <option value="priceUp" className="fs-6">
              Giá tăng dần
            </option>
            <option value="all" className="fs-6">
              Tất cả
            </option>
          </select>
        </div>
        {itemList!=[] ? <ItemsList items={itemList} />:""}
      </div>
    </div>
  );
}
