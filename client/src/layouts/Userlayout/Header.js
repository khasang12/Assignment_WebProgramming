import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/scale.css';

import { BiMenu, BiSearch, BiUserCircle, BiLocationPlus } from 'react-icons/bi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { RiShoppingBagLine } from 'react-icons/ri';
import styles from './DefaultLayout.module.scss';
import logo from '../../assets/logo.png';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../stores';
import Price from '../../components/PriceDisplay/Price';
import MyButton from '../../components/MyButton';
import images from '../../assets/images';

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
  function logout() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      sessionStorage.clear();
    }
  }
  console.log(sessionStorage.getItem('user'));
  return (
    <div className={cx('header')}>
      <div className={cx('top-bar') + ' border-bottom'}>
        <div className="container-md d-flex align-items-center justify-content-center">
          <p className="m-0 text-white d-none d-md-block"> Mở cửa: 8h đến 21h từ Thứ 2 đến chủ nhật</p>
          <div className="ml-md-auto d-flex align-items-center">
            <Tippy
              render={(attrs) => {
                return (
                  <div {...attrs} tabIndex="-1" className={cx('arrow-top-center') + ' shadow p-2 bg-white rounded'}>
                    <Link
                      to={JSON.parse(sessionStorage.getItem('user')) ? '/profile' : '/login'}
                      className="d-flex flex-column"
                    >
                      <button className="btn btn-warning mb-2 px-5">
                        {JSON.parse(sessionStorage.getItem('user'))
                          ? JSON.parse(sessionStorage.getItem('user')).name
                          : 'Đăng nhập'}
                      </button>
                    </Link>
                    <Link
                      to={JSON.parse(sessionStorage.getItem('user')) ? '/login' : '/signup'}
                      className="d-flex flex-column"
                    >
                      <button className="btn btn-light" onClick={logout}>
                        {JSON.parse(sessionStorage.getItem('user')) ? 'Đăng xuất' : 'Đăng kí'}
                      </button>
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
        <div className="mid-bar w-100 mb-2 mb-md-0">
          <div className="container-md text-white d-flex flex-md-row flex-column align-items-center flex-wrap justify-content-center">
            <Link to="/">
              <img src={logo} width="200px" className={cx('logo')} alt="logo" />
            </Link>
            <div className="d-flex flex-row col-12 col-md-10">
              <div className={cx('search') + ' d-flex'}>
                <input
                  type={'text'}
                  className="w-100"
                  placeholder="Bạn cần tìm gì ?"
                  onChange={onSearchBoxChange}
                  onKeyDown={onSearchBoxKeyDown}
                />
                <button className="btn btn-primary border-0" onClick={search}>
                  <BiSearch />
                </button>
              </div>
              <div className="d-flex align-items-center">
                <Tippy
                  render={(attrs) => {
                    return sessionStorage.getItem('user') ? (
                      state.cart.products && state.cart.products.length > 0 ? (
                        <div
                          {...attrs}
                          tabIndex="-1"
                          className={cx('arrow-top-end', 'popper') + ' shadow p-2 bg-white rounded'}
                          style={{ height: '60vh', overflowY: 'scroll' }}
                        >
                          <div className="cart-list" style={{ marginBottom: 60 }}>
                            {state.cart.products &&
                              state.cart.products.map((item, index) => {
                                return (
                                  <Link key={index} to={`/details?${item.id}`}>
                                    <div className="d-flex align-items-start border-bottom py-3 px-2">
                                      <img src={item.thumbnail} alt="" width={'100px'} />
                                      <div>
                                        <p className="text-overflow-ellipsis-2 mb-3">{item.name}</p>
                                        <Price className="font-weight-bold ml-0">{item.price}</Price>
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
                      ) : (
                        <div
                          className={
                            cx('arrow-top-end', 'popper') +
                            ' shadow p-2 bg-white rounded d-flex flex-column align-items-center'
                          }
                        >
                          <img src={images.emptyCart} alt="" width={'60%'} />
                          <p className="text-dark">Chưa có sản phẩm</p>
                        </div>
                      )
                    ) : (
                      ''
                    );
                  }}
                  interactive
                  placement="bottom-end"
                  zIndex={999}
                >
                  <Link
                    onClick = {() => {!sessionStorage.getItem('user') && alert('Vui lòng đăng nhập để thực hiện tính năng này!')}}
                    to={`${sessionStorage.getItem('user') ? '/cart' : '/login'}`}
                    className="text-white d-flex align-items-center"
                  >
                    <RiShoppingBagLine size="40" className="ml-1 mr-md-3" />
                    <div>
                      <p className="mb-1 d-none d-md-block">Giỏ hàng</p>
                      <p className="m-0">
                        (<span className="m-0">{state.cart === [] ?  state.cart.products.length : 0}</span>){' '}
                        <span className="m-0 d-none d-md-inline-block">Sản phẩm</span>
                      </p>
                    </div>
                  </Link>
                </Tippy>
              </div>
            </div>
          </div>
        </div>

        <div className="bot-bar mt-3 w-100" style={{ backgroundColor: '#e4f2f2' }}>
          <div className='container-md text-white d-flex flex-row align-items-center justify-content-between"'>
            <button className="col-12 col-lg-3 px-4 py-3 bg-warning fw-bold fs-4 d-flex flex-row align-items-center">
              <a
                className="text-white text-nowrap"
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
                className="dropdown-menu mt-3 w-100 w-lg-25 dropdown-menu-left"
                style={{ border: 0, padding: 0 }}
                aria-labelledby="dropdownMenuClickableInside"
              >
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
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
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body list-group list-group-flush p-0">
                        <a
                          href="/search?brand=dell"
                          className="list-group-item list-group-item-action"
                          aria-current="true"
                        >
                          Dell
                        </a>
                        <a href="/search?brand=acer" className="list-group-item list-group-item-action">
                          Acer
                        </a>
                        <a href="/search?brand=asus" className="list-group-item list-group-item-action">
                          Asus
                        </a>
                        <a href="/search?brand=apple" className="list-group-item list-group-item-action">
                          Apple
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body list-group list-group-flush p-0">
                        <a
                          href="/search?priceFrom=15000000&priceTo=25000000"
                          className="list-group-item list-group-item-action"
                        >
                          15-25 triệu
                        </a>
                        <a
                          href="/search?priceFrom=25000000&priceTo=35000000"
                          className="list-group-item list-group-item-action"
                        >
                          25-35 triệu
                        </a>
                        <a href="/search?priceFrom=35000000" className="list-group-item list-group-item-action">
                          Trên 35 triệu
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body list-group list-group-flush p-0">
                        <div className="btn-group dropdown dropend-lg">
                          <button
                            type="button"
                            className="btn btn-secondary list-group-item list-group-item-action fw-bold"
                            data-bs-toggle="dropdown"
                            aria-current="true"
                            aria-expanded="false"
                          >
                            Intel
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/search?cpu=intel%20core%20i3">
                                Intel Core i3
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/search?cpu=intel%20core%20i5">
                                Intel Core i5
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/search?cpu=intel%20core%20i7">
                                Intel Core i7
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group dropdown dropend-lg">
                          <button
                            type="button"
                            className="btn btn-secondary list-group-item list-group-item-action fw-bold"
                            data-bs-toggle="dropdown"
                            aria-current="true"
                            aria-expanded="false"
                          >
                            AMD
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/search?cpu=amd%20a6">
                                AMD A6 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/search?cpu=amd%20a9">
                                AMD A9 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/search?cpu=amd%20e">
                                AMD E Series
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
            <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
              <a href="about">GIỚI THIỆU</a>
            </div>
            <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
              <a href="news">TIN TỨC</a>
            </div>
            <div className="d-none d-lg-block p-2 px-5 fw-semibold fs-6">
              <a href="shopping-guide">THANH TOÁN</a>
            </div>
            <div className="d-none d-lg-block p-2 px-5 fw-bold fs-6">
              <a href="address">LIÊN HỆ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
