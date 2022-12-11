import { Modal, Button } from 'react-bootstrap';
import { AiFillCloseSquare, AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useContext, useState } from 'react';

import Price from '../PriceDisplay/Price';
import { Context } from '../../stores';
import { selectItem, removeCartItem, updateCart } from '../../stores/actions';

function CartItem({ cartItem }) {
    const [state, dispatch] = useContext(Context);

    const [confirmDelete, setConfirmDelete] = useState(false);
    const handleClose = () => setConfirmDelete(false);

    const handleConfirm = () => {
        dispatch(removeCartItem(cartItem.id));
        handleClose();
    };

    // Xử lý xoá sản phẩm khỏi giỏ hàng
    const handleRemoveCart = () => {
        dispatch(removeCartItem(cartItem.id));
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
        <div className="row align-items-center text-center border-bottom py-2">
            <div className="col-2" style={{ width: '7%' }}>
                <input
                    type="checkbox"
                    defaultChecked={cartItem.isSelected}
                    key={Math.random()}
                    onChange={(e) => {
                        dispatch(selectItem(cartItem.id));
                    }}
                />
            </div>
            <div className="col-2 p-2" style={{ width: '17%' }}>
                <img src={cartItem.image} width="60%" className="" alt="ảnh sản phẩm" />
            </div>
            <div className="col-3" style={{ width: '33%' }}>
                {cartItem.name}
            </div>
            <div className="col-2" style={{ width: '12%' }}>
                <Price primary>{cartItem.price}</Price>
            </div>
            <div
                className="col-2 d-flex align-items-center justify-content-center text-primary p-0"
                style={{ width: '12%' }}
            >
                <AiOutlineMinusSquare onClick={handleDecrease} size={24} />
                <input
                    type="text"
                    className="text-center"
                    style={{ width: 36 }}
                    defaultValue={cartItem.quantity}
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
            <div className="col-2" style={{ width: '12%' }}>
                <Price>{cartItem.quantity * cartItem.price}</Price>
            </div>
            <div className="col-1" style={{ width: '7%' }}>
                <button className="btn btn-outline text-orange p-1">
                    <AiFillCloseSquare onClick={handleRemoveCart} size={24} />
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
