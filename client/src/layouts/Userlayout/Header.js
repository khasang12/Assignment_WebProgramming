import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/scale.css';

import { BiMenu, BiSearch, BiUserCircle, BiLocationPlus } from 'react-icons/bi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { RiShoppingBagLine } from 'react-icons/ri';
import styles from './DefaultLayout.module.scss';
import logo from '../../assets/logo.png';
import { useContext, useState } from 'react';
import { Context } from '../../stores';
import Price from '../../components/PriceDisplay/Price';
import { Button } from 'react-bootstrap';
import MyButton from '../../components/MyButton';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useContext(Context);
    const [searchStr, setSearchStr] = useState('');
    const search = (e) => {
        e.preventDefault();
        if (searchStr !== '') {
            window.location.assign(`./search?s=${searchStr}`);
        }
    };

    const onSearchBoxChange = (e) => {
        setSearchStr(e.target.value);
    };

    const onSearchBoxKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchStr !== '') {
                window.location.assign(`./search?s=${searchStr}`);
            }
        }
    };
    return (
        <div className={cx('header')}>
            <div className={cx('top-bar') + ' border-bottom'}>
                <div className="container-md d-flex align-items-center">
                    <p className="m-0 text-white"> Mở cửa: 8h đến 21h từ Thứ 2 đến chủ nhật</p>
                    <div className="ml-auto d-flex align-items-center">
                        <Tippy
                            render={(attrs) => {
                                return (
                                    <div
                                        {...attrs}
                                        tabIndex="-1"
                                        className={cx('arrow-top-center') + ' shadow p-2 bg-white rounded'}
                                    >
                                        <Link to="/login" className="d-flex flex-column">
                                            <button className="btn btn-warning mb-2 px-5">Đăng nhập</button>
                                        </Link>
                                        <Link to="/signup" className="d-flex flex-column">
                                            <button className="btn btn-light">Đăng ký</button>
                                        </Link>
                                    </div>
                                );
                            }}
                            interactive
                            placement="bottom"
                            zIndex={999}
                        >
                            <button className="btn text-white py-0">
                                <BiUserCircle /> Tài khoản
                            </button>
                        </Tippy>

                        <button className="btn text-white py-0">
                            <TbShoppingCartDiscount /> Khuyến mãi
                        </button>
                        <button className="btn text-white py-0">
                            <a href="address" className="text-white">
                                <BiLocationPlus /> Hệ thống
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mid-bar w-100">
                <div className="container-md text-white d-flex align-items-center justify-content-between">
                    <Link to="/">
                        <img src={logo} width="240" className={cx('logo')} alt="logo" />
                    </Link>
                    <div className={cx('search') + ' d-flex'}>
                        <input
                            type={'text'}
                            className="w-100"
                            placeholder="Bạn cần tìm gì ?"
                            onChange={onSearchBoxChange}
                            onKeyDown={onSearchBoxKeyDown}
                        />
                        <button className="btn btn-primary border-0 my-1" onClick={search}>
                            <BiSearch />
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <Tippy
                            render={(attrs) => {
                                return (
                                    <div
                                        {...attrs}
                                        tabIndex="-1"
                                        className={cx('arrow-top-end', 'popper') + ' shadow p-2 bg-white rounded'}
                                        style={{ height: '60vh', overflowY: 'scroll' }}
                                    >
                                        <div className="cart-list" style={{ marginBottom: 60 }}>
                                            {state.cart.map((item, index) => {
                                                return (
                                                    <Link key={index} to={`/details?${item.id}`}>
                                                        <div className="d-flex align-items-start border-bottom py-3 px-2">
                                                            <img src={item.image} alt="" width={'100px'} />
                                                            <div>
                                                                <p className="text-overflow-ellipsis-2 mb-3">
                                                                    {item.name}
                                                                </p>
                                                                <Price className="font-weight-bold ml-0">
                                                                    {item.price}
                                                                </Price>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        <div
                                            className="d-flex justify-content-end bg-white py-2 border-top"
                                            style={{
                                                position: 'fixed',
                                                inset: 'auto 0 0 0',
                                                height: '60px',
                                            }}
                                        >
                                            <MyButton primary to="/cart">
                                                Xem giỏ hàng
                                            </MyButton>
                                        </div>
                                    </div>
                                );
                            }}
                            interactive
                            placement="bottom-end"
                            zIndex={999}
                        >
                            <Link to="/cart" className="text-white d-flex align-items-center">
                                <RiShoppingBagLine size="40" className="mr-3" />
                                <div>
                                    <p className="mb-1">Giỏ hàng</p>
                                    <p className="m-0">
                                        (<span className="m-0">{state.cart.length}</span>) Sản phẩm
                                    </p>
                                </div>
                            </Link>
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className="bot-bar w-100" style={{ backgroundColor: '#e4f2f2' }}>
                <div className='container-md text-white d-flex flex-row align-items-center justify-content-between"'>
                    <button className="col-12 col-lg-3 px-4 py-3 bg-warning fw-bold fs-4 d-flex flex-row align-items-center">
                        <a
                            className="text-white"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="dropdownMenuClickableInside"
                            data-bs-auto-close="outside"
                        >
                            <BiMenu className="mr-1" />
                            Danh mục sản phẩm
                        </a>
                        <ul
                            class="dropdown-menu mt-3 w-100 w-lg-25 dropdown-menu-left"
                            style={{ border: 0, padding: 0 }}
                            aria-labelledby="dropdownMenuClickableInside"
                        >
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
                                            Thương hiệu
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body list-group list-group-flush p-0">
                                            <a
                                                href="/search?brand=dell"
                                                class="list-group-item list-group-item-action"
                                                aria-current="true"
                                            >
                                                Dell
                                            </a>
                                            <a href="/search?brand=acer" class="list-group-item list-group-item-action">
                                                Acer
                                            </a>
                                            <a href="/search?brand=asus" class="list-group-item list-group-item-action">
                                                Asus
                                            </a>
                                            <a
                                                href="/search?brand=apple"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Apple
                                            </a>
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
                                            Mức giá
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body list-group list-group-flush p-0">
                                            <a
                                                href="/search?priceFrom=5&priceTo=15"
                                                class="list-group-item list-group-item-action"
                                                aria-current="true"
                                            >
                                                5-15 triệu
                                            </a>
                                            <a
                                                href="/search?priceFrom=15&priceTo=25"
                                                class="list-group-item list-group-item-action"
                                            >
                                                15-25 triệu
                                            </a>
                                            <a
                                                href="/search?priceFrom=25&priceTo=35"
                                                class="list-group-item list-group-item-action"
                                            >
                                                25-35 triệu
                                            </a>
                                            <a
                                                href="/search?priceFrom=35&priceTo=100"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Trên 35 triệu
                                            </a>
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
                                            Cấu hình
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body list-group list-group-flush p-0">
                                            <div class="btn-group dropend">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary list-group-item list-group-item-action"
                                                    data-bs-toggle="dropdown"
                                                    aria-current="true"
                                                    aria-expanded="false"
                                                >
                                                    Intel
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=intel-i3">
                                                            Intel Core i3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=intel-i5">
                                                            Intel Core i5
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=intel-i7">
                                                            Intel Core i7
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=intel-i9">
                                                            Intel Core i9
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-group dropend">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary list-group-item list-group-item-action"
                                                    data-bs-toggle="dropdown"
                                                    aria-current="true"
                                                    aria-expanded="false"
                                                >
                                                    AMD
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=amd-ryzen-3">
                                                            AMD Ryzen 3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=amd-ryzen-5">
                                                            AMD Ryzen 5
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=amd-ryzen-7">
                                                            AMD Ryzen 7
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/search?cpu=amd-ryzen-9">
                                                            AMD Ryzen 9
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </button>
                    <div className="d-none d-lg-block p-2 px-5 fw-semibold fs-6">
                        <a href="shopping-guide">THANH TOÁN</a>
                    </div>
                    <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
                        <a href="address">LIÊN HỆ</a>
                    </div>
                    <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
                        <a href="news">TIN TỨC</a>
                    </div>
                    <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
                        <a href="customer-care">CHĂM SÓC KHÁCH HÀNG</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
