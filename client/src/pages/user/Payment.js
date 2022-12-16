import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Dropdown, Modal } from 'react-bootstrap';

import { MdArrowBackIos } from 'react-icons/md';

import { Context } from '../../stores';
import images from '../../assets/images';
import Price from '../../components/PriceDisplay/Price';
import AddressForm from '../../components/Form/AddressForm';
import { getAddress_str, getPaymentMethod_str } from '../../helpper/helpper';
import { useViewport } from '../../hooks/hooks';

const deliveryUnits = [
  {
    title: 'GIAO NHANH 24H',
    description: 'Sau khi xác nhận đơn hàng',
    price: 0,
    name: 'giao-hang-24h',
  },
  // {
  //     title: 'GIAO NHANH 2 - 4H',
  //     description: 'Sau khi xác nhận đơn hàng',
  //     price: 19000,
  //     name: 'giao-hang-2-4h',
  // },
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

const PAYMENT_ONLINE = 'p_online';
const PAYMENT_ONLINE_CONFIRM = 'p_online_confirm';
const HIDDEN = 'hidden';
const SAVE_ARRESS = 'save_address';
const RESULT = 'result';
function Payment() {
  const [state, dispatch] = useContext(Context);
  const [ready, setReady] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [showModal, setShowModal] = useState({ type: HIDDEN, payload: '' });
  const { width, size } = useViewport();
  // get products selected and caculate total price
  if (!state.cart.products) return 'No record';
  const products = state.cart.products.filter((item) => item.isSelected);
  const totalPrice = products.reduce((res, item) => (item.isSelected ? res + item.price * item.quantity : res), 0);

  if (products.length <= 0) {
    window.location.href = '/cart';
  }

  const handleOpen = (type, payload) => {
    setShowModal({ type, payload });
  };
  const handleClose = () => setShowModal((prev) => ({ ...prev, type: HIDDEN }));
  const handleConfirmSaveAddress = () => {};

  const handleConfirmPaid = () => {
    handleClose();
    handleOpen(PAYMENT_ONLINE_CONFIRM, '');
  };

  //get cost of delivery
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

    if (!city || !district || !ward || !specificAddress || !phoneNumber) {
      alert('Vui lòng điền đầy thủ thông tin địa chỉ nhận hàng!');
      setReady(false);
      return;
    }

    if (!paymentMethod) {
      alert('Vui lòng chọn phương thức thanh toán!');
      setReady(false);
      return;
    }

    order.userID = state.cart.user_id;
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

    order.products = state.cart.products.map((item) => [item.product_id, item.quantity]);

    console.log(order);
    if (paymentMethod !== 'cash') {
      handleOpen(PAYMENT_ONLINE, order);
      setReady(false);
    } else {
      setReady(true);
    }
    handleCreateOrder(order);

  };

  const handleCreateOrder = async (order) => {
    if (!ready) return ;
    await axios({
      method: 'post',
      data: order,
      url: 'http://localhost:8080/api/orders',
    })
      .then((res) => handleOpen(RESULT, ''))
      .catch((err) => alert('Đã xảy ra lỗi vui lòng thử lại'));

    //Xoá sản phẩm đã chọn trong giỏ hàng
    await order.products.forEach(async (item) => {
      await axios({
        method: 'delete',
        url: `http://localhost:8080/api/cart/${state.current_user.id}`,
        data: {
          product_id: item[0],
        },
      })
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    });
  };

  return (
    <div className="container">
      <h2 className="py-2 mt-4 border-bottom">Thanh toán</h2>
      <form name="checkoutForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="row my-3">
          <div className="address-info col-12 col-lg-4 order-2 mt-5" style={width >= 992 ? { width: '30%' } : {}}>
            <h5>Thông tin nhận hàng</h5>
            <AddressForm />
          </div>
          <div className="col-12 col-lg-3 order-3 mt-5" style={width >= 992 ? { width: '30%' } : {}}>
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
                    <input type={'radio'} name="payment__method" className="mt-1" id={item.name} value={item.name} />
                    <label htmlFor={item.name} className="mx-2">
                      {item.title}{' '}
                    </label>
                    <img src={item.image} alt="" className="ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-3 col-lg-3" style={width >= 992 ? { width: '40%' } : {}}>
            <Accordion className="col-12 d-block d-lg-none p-0" defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5 className="mb-2">Đơn hàng ({products.length} sản phẩm)</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="payment__list-products border-bottom py-2">
                    {products.map((item, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <div className="position-relative">
                          <img src={item.thumbnail} alt="" width={100} />
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="col-12 d-none d-lg-block">
              <h5 className="mb-2">Đơn hàng ({products.length} sản phẩm)</h5>
              <div className="border-bottom py-2">
                {products.map((item, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <div className="position-relative">
                      <img src={item.thumbnail} alt="" width={100} />
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
            </div>
            {/* <div className="d-flex align-items-center py-2 border-bottom mb-3">
                            <div className="form-floating w-100 mr-3">
                                <input className="form-control" placeholder="Nhập mã giảm giá" id="payment__note" />
                                <label htmlFor="payment__note">Nhập mã giảm giá</label>
                            </div>
                            <button className="btn btn-primary bg-primary ml-auto px-4 text-nowrap">Áp dụng</button>
                        </div> */}

            <div>
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
            </div>

            <div className="d-none d-lg-flex justify-content-between align-items-center">
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
          <div className="d-flex d-lg-none order-4 justify-content-between align-items-center mt-3">
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
      </form>

      <Modal show={showModal.type === PAYMENT_ONLINE} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>{getPaymentMethod_str(showModal.payload.p_method)}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-5">
                <img src={images.qrcode} alt="" width={'100%'} />
              </div>
              <div className="col-12 col-sm-7">
                <h6>QUÉT MÃ QR ĐỂ THANH TOÁN</h6>
                <div className="d-flex align-items-start">
                  <span className="bg-primary2 rounded-circle px-2 py-1 text-white ms-0 me-1">1</span>
                  <span> Mở ứng dụng VNPAY trên điện thoại</span>
                </div>
                <div className="d-flex align-items-start my-2">
                  <span className="bg-primary2 rounded-circle px-2 py-1 text-white ms-0 me-1">2</span>
                  <span>Trên trang chủ chọn “ Quét mã QR” </span>
                </div>
                <div className="d-flex align-items-start">
                  <span className="bg-primary2 rounded-circle px-2 py-1 text-white ms-0 me-1">3</span>
                  <span>Quét mã QR này để thanh toán </span>
                </div>
                <a href="#" className="text-info d-block mt-3 font-weight-regular" onClick={handleClose}>
                  Chọn phương thức khác
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" onClick={() => handleConfirmPaid()}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {/* confirm paid */}
      <Modal show={showModal.type === PAYMENT_ONLINE_CONFIRM} onHide={handleClose} size="" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Xác nhận thanh toán</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {' '}
              Xác nhận bạn đã thanh toán cho đơn hàng này, sau khi xác nhận chúng tôi sẽ phản hồi cho bạn trong thời
              gian sớm nhất có thể
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
            Huỷ
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              setReady(true);
            }}
          >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {/* KẾt quả */}
      <Modal show={showModal.type === RESULT} onHide={handleClose} size="" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Đặt hàng</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              Cảm ơn bạn đã tin tưởng và ủng hộ BKZONE! Vui lòng theo dõi điện thoại, chúng tôi sẽ liên hệ với bạn trong
              thời gian sớm nhất.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();

              //chuyển sang trang chủ
              window.location.href = '/';
            }}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Payment;

/**
 * Validate form
 * Responsive web
 * Xử lý trường hợp thêm địa chỉ vào sổ dịa chỉ
 */