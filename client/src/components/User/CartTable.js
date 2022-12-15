import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../../stores';
import { selectAllProducts } from '../../stores/actions';
import Price from '../PriceDisplay/Price';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useViewport } from '../../hooks/hooks';

function CartTable() {
  const [state, dispatch] = useContext(Context);
  const handleSelectAll = (isCheck) => {
    dispatch(selectAllProducts(isCheck));
  };
  const {width, size} = useViewport() ;
  let products = state.cart.products;

  // get products selected
  const productsSelected = products ? products.filter((item) => item.isSelected) : [];
  console.log(products);
  console.log(state);
  //caculate total cost
  const totalCost = productsSelected.reduce((res, item) => res + item.price * item.quantity, 0);

  const handleSubmit = async () => {
    console.log(productsSelected);
  };
  if (!products) return 'No record';
  return (
    <>
      {products.length > 0 ? (
        <div className="container my-5 border-bottom">
          <div className="row text-center border-bottom py-2 d-none d-lg-flex">
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
          <div className="row py-3 align-items-start border-bottom">
            <div className="col-6">
              <input
                type="checkbox"
                // key={Math.random()}
                defaultChecked={productsSelected.length === products.length}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
              <span>Chọn tất cả ({products.length})</span>
            </div>

            <div className="col-6 d-flex align-items-start flex-column flex-md-row">
              <span className="mb-0 ml-md-auto">Tổng tiền: </span>
              <Price medium>{totalCost}</Price>
            </div>
          </div>
          <div className={`justify-content-end my-3  ${width >= 768 ? 'd-flex' : 'row mb-2'}`}>
            <Link to="/" className={`btn btn-secondary ${width >= 768 ? 'mr-2' : 'mb-2'}`}>
              TIẾP TỤC MUA HÀNG
            </Link>
            <Link to="/payment" className="btn btn-primary bg-primary" onClick={handleSubmit}>
              THỰC HIỆN THANH TOÁN
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
