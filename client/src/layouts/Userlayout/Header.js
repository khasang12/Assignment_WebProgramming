import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/scale.css';

import { BiSearch, BiUserCircle, BiLocationPlus } from 'react-icons/bi';
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
                <div className="container d-flex align-items-center">
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
                                        <div className="d-flex flex-column">
                                            <Link to="/login">
                                                <button className="btn btn-warning mb-2 px-5 w-100">Đăng nhập</button>
                                            </Link>
                                            <Link to="/register">
                                                <button className="btn btn-light mb-2 px-5 w-100">Đăng ký</button>
                                            </Link>
                                        </div>
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
                            <BiLocationPlus /> Hệ thống
                        </button>
                    </div>
                </div>
            </div>
            <div className="mid-bar w-100">
                <div className="container text-white d-flex align-items-center justify-content-between">
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
                        <button className="btn btn-primary border-0" onClick={search}>
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
        </div>
    );
}

export default Header;
