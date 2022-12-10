import Price from '../../components/PriceDisplay/Price';

import { useContext } from 'react';
import { MdArrowBackIos } from 'react-icons/md';

import { Context } from '../../stores';
import images from '../../assets/images';
import AddressForm from '../../components/Form/AddressForm';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAddress_str } from '../../helpper/helpper';
import axios from 'axios';

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
        name: 'cash',
        image: images.cod,
    },
];

function Payment() {
    const [state, dispatch] = useContext(Context);

    // get products selected and caculate total price
    const products = state.cart.filter((item) => item.isSelected);
    const totalPrice = products.reduce((res, item) => (item.isSelected ? res + item.price * item.quantity : res), 0);

    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showConfirmPaymentModal, setShowConfirmPaymentModal] = useState(false);

    const [ready, setReady] = useState(false);

    if (products.length <= 0) {
        window.location.href = '/cart';
    }

    //get cost of delivery
    const [deliveryCost, setDeliveryCost] = useState(0);
    const handleSetDeliveryCost = (price) => {
        console.log(price);
        setDeliveryCost(price);
    };

    // click button 'Đặt hàng'
    const handleSubmit = (e) => {
        e.preventDefault();
        let order = {};

        let city = e.target.payment__selectCity.value;
        let district = e.target.payment__selectDistricts.value;
        let ward = e.target.payment__selectWards.value;
        let specificAddress = e.target.payment__SpecificAddress.value;
        let paymentMethod = e.target.payment__method.value;
        let phoneNumber = e.target.payment__phoneNumber.value;

        if (!city || !district || !ward || !specificAddress || !paymentMethod || !phoneNumber) {
            alert('Vui lòng điền đầy thủ thông tin địa chỉ nhận hàng!');
            setReady(false);
            return;
        }

        order.userID = 1;
        order.receiverName = e.target.payment__fullname.value;
        order.phoneNumber = phoneNumber;
        order.p_method = paymentMethod;
        order.note = e.target.payment__note.value;

        order.address = getAddress_str({
            city: city,
            district: district,
            ward: ward,
            specificAddress: specificAddress,
        });

        order.products = state.cart.map((item) => [item.id, item.quantity]);

        if (paymentMethod !== 'cash') {
            alert('thanh toán online');
            setReady(false);
        } else {
            setReady(true);
        }

        if (ready) {
            console.log('ready: ');
            axios({
                method: 'post',
                data: order,
                url: 'http://localhost:8080/api/orders',
            })
                .then((res) => {
                    alert('Thành công');

                    //Xoá sản phẩm đã chọn trong giỏ hàng

                    //chuyển sang trang quản lý đơn hàng
                    window.location.href = '/';
                })
                .catch((err) => alert('Đã xảy ra lỗi vui lòng thử lại'));
        }
        console.log(sessionStorage);
        console.log(order);
    };

    return (
        <div className="container">
            <h2 className="py-2 mt-4 border-bottom">Thanh toán</h2>
            <form name="checkoutForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="row my-3">
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
                                        <input
                                            type={'radio'}
                                            name="payment__method"
                                            className="mt-1"
                                            id={item.name}
                                            value={item.name}
                                        />
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

/**
 * Validate form
 * Responsive web
 * Xử lý thanh toán online
 * Viết hướng dẫn thanh toán online
 * Áp dụng mã giảm giá (nếu có)
 * Xử lý trường hợp khách đã đăng nhập và có địa chỉ trong sổ địa chỉ
 * Xử lý trường hợp thêm địa chỉ vào sổ dịa chỉ
 */
