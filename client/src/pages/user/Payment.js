import Price from '../../components/PriceDisplay/Price';

import { useContext } from 'react';
import { MdArrowBackIos } from 'react-icons/md';

import { Context } from '../../stores';
import images from '../../assets/images';
import AddressForm from '../../components/Form/AddressForm';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const deliveryUnits = [
    {
        title: 'GIAO NHANH 24H',
        description: 'Sau khi xác nhận đơn hàng',
        price: 0,
        name: 'giao-hang-24h',
    },
    {
        title: 'GIAO NHANH 2 - 4H',
        description: 'Sau khi xác nhận đơn hàng',
        price: 19000,
        name: 'giao-hang-2-4h',
    },
];

const paymentMethods = [
    {
        title: 'Thanh toán qua VNPAY',
        name: 'vnpay',
        image: images.vnpay,
    },
    {
        title: 'Thanh toán qua chuyển khoản ngân hàng (Quét mã QR)',
        name: 'vietqr',
        image: images.vietQr,
    },
    {
        title: 'Thanh toán khi nhận hàng',
        name: 'cod',
        image: images.cod,
    },
];

function Payment() {
    const [state, dispatch] = useContext(Context);

    const products = state.cart.filter((item) => item.isSelected);
    if (products.length <= 0) {
        window.location.href = '/cart';
    }

    const [deliveryCost, setDeliveryCost] = useState(0);
    const handleSetDeliveryCost = (price) => {
        console.log(price);
        setDeliveryCost(price);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('đặt hàng thành công!');
    };

    const totalPrice = products.reduce((res, item) => (item.isSelected ? res + item.price * item.quantity : res), 0);

    return (
        <div className="container">
            <h2 className="py-2 mt-4 border-bottom">Thanh toán</h2>
            <form name="checkoutForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="row mt-3">
                    <div className="address-info col-4 mt-5" style={{ width: '30%' }}>
                        <h5>Thông tin nhận hàng</h5>
                        <AddressForm />
                    </div>
                    <div className="col-3 mt-5" style={{ width: '30%' }}>
                        <div className="delivery">
                            <h5>Vận chuyển</h5>
                            {deliveryUnits.map((item, index) => (
                                <div key={index} className="d-flex align-items-start border p-2 bg-white mb-2 rounded">
                                    <input
                                        name="select-delivery-unit"
                                        id={item.name}
                                        className="mt-1"
                                        type={'radio'}
                                        defaultChecked={false}
                                        onChange={() => handleSetDeliveryCost(item.price)}
                                    />
                                    <label htmlFor="giao-nhanh-2-4h" className="mx-2">
                                        <p className="m-0">{item.title}</p>
                                        <p className="m-0">{item.description}</p>
                                    </label>

                                    {item.price === 0 ? (
                                        <span className="text-nowrap ml-auto">Miễn phí</span>
                                    ) : (
                                        <Price className="ml-auto" normal>
                                            {item.price}
                                        </Price>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="payment-method mt-3">
                            <h5>Phương thức thanh toán</h5>
                            <div className="border p-2">
                                {paymentMethods.map((item, index) => (
                                    <div key={index} className="d-flex align-items-start">
                                        <input type={'radio'} name="payment-method" className="mt-1" id={item.name} />
                                        <label htmlFor={item.name} className="mx-2">
                                            {item.title}{' '}
                                        </label>
                                        <img src={item.image} alt="" className="ml-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-5" style={{ width: '40%' }}>
                        <h5 className="mb-2">Đơn hàng ({products.length} sản phẩm)</h5>
                        <div className="payment__list-products border-bottom py-2">
                            {products.map((item, index) => (
                                <div key={index} className="d-flex align-items-center">
                                    <div className="position-relative">
                                        <img src={item.image} alt="" width={100} />
                                        <span
                                            className="position-absolute rounded-circle bg-primary px-1 text-white"
                                            style={{ top: 0, right: 0 }}
                                        >
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <span>{item.name}</span>
                                    <Price>{item.price * item.quantity}</Price>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex align-items-center py-2 border-bottom mb-3">
                            <div className="form-floating w-100 mr-3">
                                <input className="form-control" placeholder="Nhập mã giảm giá" id="payment__note" />
                                <label htmlFor="payment__note">Nhập mã giảm giá</label>
                            </div>
                            <button className="btn btn-primary bg-primary ml-auto px-4 text-nowrap">Áp dụng</button>
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-3">
                            <span>Tạm tính</span>
                            <Price>{totalPrice}</Price>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span>Phí vận chuyển</span>
                            {deliveryCost === 0 ? <span>Miễn phí</span> : <Price>{deliveryCost}</Price>}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
                            <span>Tổng cộng:</span>
                            <Price large>{totalPrice + deliveryCost}</Price>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/cart">
                                <button className="btn border-0 font-weight-bold text-primary">
                                    <MdArrowBackIos />
                                    Quay lại giỏ hàng
                                </button>
                            </Link>
                            <button type="submit" className="btn btn-primary bg-primary px-5 py-3">
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Payment;
