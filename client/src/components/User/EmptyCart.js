import { Link } from 'react-router-dom';
import images from '../../assets/images';

function EmptyCart() {
  return (
    <div className="d-flex justify-content-center aligh-items-center">
      <div className="mx-auto d-flex flex-column align-items-center">
        <img src={images.emptyCart} alt="empty cart" width="300"></img>
        <p>Giỏ hàng của bạn hiện đang trống</p>
        <Link to="/">
          <button className="btn bg-primary btn-primary py-2 px-5">Mua ngay</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
