import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import { BiSearch, BiUserCircle, BiLocationPlus } from 'react-icons/bi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { RiShoppingBagLine } from 'react-icons/ri';
import styles from './DefaultLayout.module.scss';
import logo from '../../assets/logo.png';

const cx = classNames.bind(styles);

export const userOption = [
    {
        name: 'Đăng nhập',
        to: '/login',
    },
    {
        name: 'Đăng xuất',
        to: '/register',
    },
];

function Header() {
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
                                        className={cx('arrow-top') + ' shadow p-2 bg-white rounded'}
                                    >
                                        <Link to="/login" className="d-flex flex-column">
                                            <button className="btn btn-warning mb-2 px-5">Đăng nhập</button>
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
                        <input type={'text'} className="w-100" placeholder="Bạn cần tìm gì ?" />
                        <button className="btn btn-primary border-0">
                            <BiSearch />
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <RiShoppingBagLine size="40" className="mr-3" />
                        <Link to="/cart" className="text-white">
                            <p className="mb-1">Giỏ hàng</p>
                            <p className="m-0">
                                (<span className="m-0">0</span>) Sản phẩm
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
