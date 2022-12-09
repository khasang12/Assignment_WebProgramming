import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ItemsList from "../Home/ItemList";
import RangeSlider from "react-bootstrap-range-slider";
import axios from "axios";

export default function SearchPage() {
  // States
  const initFilter = {
    sort: "all",
    priceFrom: "all",
    priceTo: "all",
    screen_size: "all",
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
      //getItemListByBrand(urlParams.get("brand"))
      console.log("brand");
    } else if (urlParams.get("priceFrom") && urlParams.get("priceTo")) {
      //getItemListByPrice(urlParams.get("priceFrom"), urlParams.get("priceTo"))
    } else if (urlParams.get("cpu")) {
      //getItemListByConfig(urlParams.get("config"))
      console.log("config");
    } else if (urlParams.get("filter")) {
      //getItemListFiltered(filter)
      console.log(filter);
    } else {
      //getItemListByName(urlParams.get("s"))
      console.log("name");
    }
    // api called by filter
    return () => window.clearTimeout(timeoutID);
  }, [urlParams]);

  // Functions
  // API polling...
  const getItemListByName = async (name) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products?name=${name}`,
      data: { name: name },
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListByBrand = async (brandname) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products?brand=${brandname}`,
      data: { brandname: brandname },
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListByPrice = async (priceFrom, priceTo) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products?priceFrom=${priceFrom}&priceTo=${priceTo}`,
      data: { priceFrom: priceFrom, priceTo: priceTo },
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListByConfig = async (config) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products?config=${config}`,
      data: { config: config },
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };
  const getItemListFiltered = async () => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/products`,
      data: filter,
    })
      .then((response) => setItemList(response.data))
      //.then(setRecords(ProductList))
      .catch((res) => alert(res));
  };

  // Event handler
  const onChangeHandler = (e) => {
    setFilter((filter) => ({ ...filter, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    if (parseInt(filter["priceFrom"]) > parseInt(filter["priceTo"])) {
      alert("Giá sàn không lớn hớn giá trần");
    } else {
      console.log(filter);
      setURLParams("filter=true");
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
              <label for="sort" class="form-label text-uppercase fw-bold">
                Sắp xếp:
              </label>
              <br />
              <select
                id="sort"
                name="sort"
                class="form-select"
                onChange={onChangeHandler}
                defaultValue="all"
                className="border-[#1488d8] border-2 py-1 px-4 rounded appearance-none w-75"
              >
                <option value="new">Mới nhất</option>
                <option value="priceDown">Giá giảm dần</option>
                <option value="priceUp">Giá tăng dần</option>
                <option value="all">Tất cả</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label text-uppercase fw-bold">
                Tầm giá:
              </label>
              <br />
              <label for="priceMin" class="form-label">
                Min:
              </label>
              <RangeSlider
                min={0}
                max={40000000}
                step={100000}
                name="priceFrom"
                onChange={onChangeHandler}
                tooltipPlacement="top"
                tooltip="off"
              />
              <br />
              <label for="priceMax" class="form-label">
                Max:
              </label>
              <RangeSlider
                min={0}
                max={40000000}
                step={100000}
                name="priceTo"
                onChange={(e) => onChangeHandler(e)}
                tooltipPlacement="top"
                tooltip="off"
              />
              <br />
              {filter["priceFrom"]}VND - {filter["priceTo"]}VND
            </div>

            <div class="mb-3">
              <label for="price" class="form-label text-uppercase fw-bold">
                Kích thước màn hình
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="all"
                  name="screen_size"
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
                  value="13"
                  name="screen_size"
                  id="flexCheckDefault"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  13 inch
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="14"
                  name="screen_size"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  14 inch
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="16"
                  name="screen_size"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  16 inch
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
                  value="1000"
                  name="ssd"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  1 TB
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="2000"
                  name="ssd"
                  id="flexCheckChecked"
                  onChange={onChangeHandler}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  2 TB
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
          <label for="sort" class="form-label text-uppercase fw-bold">
            Sắp xếp:
          </label>
          <br />
          <select
            id="sort"
            style={{ width: "auto" }}
            class="form-select"
            onChange={onChangeHandler}
            name="sort"
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
        <ItemsList itemList={itemList} />
      </div>
    </div>
  );
}
