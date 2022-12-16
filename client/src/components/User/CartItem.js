import { Modal, Button } from 'react-bootstrap';
import { AiFillCloseSquare, AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useContext, useState } from 'react';

import Price from '../PriceDisplay/Price';
import { Context } from '../../stores';
import { selectItem, removeCartItem, updateCart, setCart } from '../../stores/actions';
import { getCartAPI, removeCartItemAPI } from '../../api/cartAPI';
import { useViewport } from '../../hooks/hooks';

function CartItem({ cartItem }) {
  const [state, dispatch] = useContext(Context);
  const { width, size } = useViewport();
  console.log(width, size);

  console.log(cartItem);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const handleClose = () => setConfirmDelete(false);

  const handleConfirm = () => {
    handleRemoveCart();
    handleClose();
  };

  // Xử lý xoá sản phẩm khỏi giỏ hàng
  const handleRemoveCart = async () => {
    // remove
    await removeCartItemAPI(cartItem.product_id);
    // update
    await getCartAPI().then((res) => dispatch(setCart(res)));
  };

  // Xử lý giảm sản phẩm
  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      setConfirmDelete(true);
    } else dispatch(updateCart(cartItem.quantity--));
  };

  // Xử lý tăng sản phẩm
  const handleIncrease = () => {
    dispatch(updateCart(cartItem.quantity++));
  };

  return (
    <div className="row align-items-center justify-content-between text-center border-bottom py-2">
      <div className="col-1 col-md-1" style={width >= 768 ? { width: '7%' } : {}}>
        <input
          type="checkbox"
          defaultChecked={cartItem.isSelected}
          key={Math.random()}
          onChange={(e) => {
            dispatch(selectItem(cartItem.product_id));
          }}
        />
      </div>
      <div className="col-3 col-md-3 p-2" style={width >= 992 ? { width: '17%' } : {}}>
        <img src={cartItem.thumbnail} width={width >= 992 ? '60%' : '80%'} className="" alt="ảnh sản phẩm" />
      </div>
      <div
        className={`col-5 col-md-3 ${width >= 992 ? 'text-center' : 'text-start'}`}
        style={width >= 992 ? { width: '33%' } : {}}
      >
        <p>{cartItem.name}</p>
        <Price primary className="m-0 d-block d-md-none">
          {cartItem.price}
        </Price>
      </div>
      <div className="col-2 d-none d-lg-block" style={width >= 992 ? { width: '12%' } : {}}>
        <Price primary>{cartItem.price}</Price>
      </div>
      <div
        className="col-2 col-md-2 d-none d-md-flex align-items-center justify-content-center text-primary p-0 "
        style={{ width: '12%' }}
      >
        <AiOutlineMinusSquare onClick={handleDecrease} size={24} />
        <input
          type="text"
          className="text-center"
          style={{ width: 36 }}
          defaultValue={cartItem.quantity}
          disabled
          key={Math.random()}
          onChange={(e) => {
            cartItem.quantity = Number(e.target.value);
          }}
          onBlur={(e) => {
            dispatch(updateCart(CartItem.quantity));
          }}
        />
        <AiOutlinePlusSquare onClick={handleIncrease} size={24} />
      </div>
      <div className="col-2 col-md-2 d-none d-md-block" style={width >= 992 ? { width: '12%' } : {}}>
        <Price>{cartItem.quantity * cartItem.price}</Price>
      </div>
      <div className="col-1" style={width >= 992 ? { width: '7%' } : {}}>
        <div className="d-flex align-items-center justify-content-center text-primary p-0 d-md-none">
          <AiOutlineMinusSquare onClick={handleDecrease} size={24} />
          <span className="mx-1">{cartItem.quantity}</span>
          <AiOutlinePlusSquare onClick={handleIncrease} size={24} />
        </div>
        <button className="btn btn-outline text-orange p-1" onClick={handleRemoveCart}>
          {width >= 768 ? <AiFillCloseSquare size={24} /> : <p className="m-0">Xoá</p>}
        </button>
      </div>

      <Modal
        show={confirmDelete}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xoá sản phẩm khỏi giỏ hàng</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartItem;

// Một số trường hợp xử lý sau:
/**
 * Tăng/ giảm số lượng thì auto select
 * Kiểm tra input khi nhập số lượng sản phẩm
 * Nhấn enter để blur ra khỏi input
 *
 */
