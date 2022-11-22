import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemsList from '../Home/ItemList';
import RangeSlider from 'react-bootstrap-range-slider';

export default function SearchPage() {
    const [price, setPrice] = useState({ min: 0, max: 0 });
    const [searchMode, setSearchMode] = useState(1);
    const [urlParams, setURLParams] = useSearchParams();
    const btnActiveStyle = 'bg-primary text-white';
    const btnInactiveStyle = 'bg-white text-primary';

    const onClickSearchByNameBtn = (e) => {
        e.preventDefault();
        setSearchMode(1);
    };

    const onClickSearchByTagBtn = (e) => {
        e.preventDefault();
        setSearchMode(2);
    };

    const onChangeSortItem = (e) => {
        console.log(e.target.value);
    };

    const onChangeProductState = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="container w-full flex flex-column mt-3 text-center">
            <div className="w-full flex flex-column text-start pt-3">
                <div className="fs-2 w-100">
                    Kết quả tìm kiếm cho :&nbsp; <span className="text-[#030391]">{urlParams.get('s')}</span>
                </div>
                <div className="flex flex-row flex-wrap text-center text-md-start justify-start mt-2 mb-4">
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
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
                {/* Filter Bar - Tablet & Desktop */}
                <div
                    style={{ minWidth: '200px', height: 'auto' }}
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
                                class="form-select"
                                onChange={onChangeSortItem}
                                defaultValue="all"
                                className="border-[#1488d8] border-2 py-1 px-4 rounded appearance-none w-75"
                            >
                                <option value="time">Mới nhất</option>
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
                                value={price['min']}
                                min={0}
                                max={100000000}
                                step={100000}
                                tooltipPlacement="top"
                                tooltip="off"
                                onChange={(changeEvent) => setPrice({ ...price, min: changeEvent.target.value })}
                            />
                            <br />
                            <label for="priceMax" class="form-label">
                                Max:
                            </label>
                            <RangeSlider
                                value={price['max']}
                                min={price['min']}
                                max={100000000}
                                step={100000}
                                tooltipPlacement="top"
                                tooltip="off"
                                onChange={(changeEvent) => setPrice({ ...price, max: changeEvent.target.value })}
                            />
                            <br />
                            {price['min']}VND - {price['max']}VND
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label text-uppercase fw-bold">
                                Kích thước màn hình
                            </label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    13 inch
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    14 inch
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    8 GB
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    256 GB
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    512 GB
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    1 TB
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    2 TB
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-secondary">
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
                        style={{width:'auto'}}
                        class="form-select"
                        onChange={onChangeSortItem}
                        defaultValue="all"
                        className="border-[#1488d8] border-2 py-1 px-4 rounded w-sm-50 w-md-auto"
                    >
                        <option value="time" className='fs-6'>Mới nhất</option>
                        <option value="priceDown" className='fs-6'>Giá giảm dần</option>
                        <option value="priceUp" className='fs-6'>Giá tăng dần</option>
                        <option value="all" className='fs-6'>Tất cả</option>
                    </select>
                </div>
                <ItemsList />
            </div>
        </div>
    );
}
