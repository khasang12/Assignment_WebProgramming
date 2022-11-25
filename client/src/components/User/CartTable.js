import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../stores';
import { selectAllProducts } from '../../stores/actions';
import Price from '../PriceDisplay/Price';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

function CartTable() {
    const [state, dispatch] = useContext(Context);

    const products = state.cart;

    const handleSelectAll = (isCheck) => {
        dispatch(selectAllProducts(isCheck));
    };

    // get products selected
    const productsSelected = products.filter((item) => item.isSelected);

    //caculate total cost
    const totalCost = productsSelected.reduce((res, item) => res + item.price * item.quantity, 0);

    return (
        <>
            {products.length > 0 ? (
                <div className="container my-5 border-bottom">
                    <div className="row text-center border-bottom py-2">
                        <div className="col-2" style={{ width: '7%' }}>
                            Chọn
                        </div>
                        <div className="col-2" style={{ width: '17%' }}>
                            Ảnh sản phẩm
                        </div>
                        <div className="col-3" style={{ width: '33%' }}>
                            Tên sản phẩm
                        </div>
                        <div className="col-2" style={{ width: '12%' }}>
                            {' '}
                            Đơn giá
                        </div>
                        <div className="col-2" style={{ width: '12%' }}>
                            {' '}
                            Số lượng
                        </div>
                        <div className="col-2" style={{ width: '12%' }}>
                            Thành tiền
                        </div>
                        <div className="col-1" style={{ width: '7%' }}>
                            Xoá
                        </div>
                    </div>
                    {products.map((item, index) => {
                        return <CartItem key={index} cartItem={item} />;
                    })}
                    <div className="row py-3 align-items-center border-bottom">
                        <div className="col-6">
                            <input
                                type="checkbox"
                                // key={Math.random()}
                                defaultChecked={productsSelected.length === products.length}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                            />
                            <span>Chọn tất cả ({products.length} sản phẩm)</span>
                        </div>

                        <div className="col-6 d-flex align-items-center">
                            <span className="mb-0 ml-auto">Tổng tiền: </span>
                            <Price medium>{totalCost}</Price>
                        </div>
                    </div>
                    <div className="cart-action d-flex justify-content-end my-3">
                        <Link to="/">
                            <button className="btn btn-secondary mr-2">TIẾP TỤC MUA HÀNG</button>
                        </Link>
                        <Link to="/payment">
                            <button className="btn btn-primary bg-primary">THỰC HIỆN THANH TOÁN</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}

export default CartTable;
