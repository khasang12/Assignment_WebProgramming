import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import { useContext } from 'react';
import { Context } from '../../stores';
import { addToCart, setCart } from '../../stores/actions';
import RateStar from '../../components/User/RateStar';
import LazyLoad from 'react-lazy-load';
import Price from '../PriceDisplay/Price';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCartAPI } from '../../api/cartAPI';

export default function Item({ item }) {
  //add product to cart
  const [state, dispatch] = useContext(Context);
  const handleAddToCart = async () => {
    let user_id = JSON.parse(sessionStorage.getItem('user')).id;
    if (sessionStorage.getItem('user')) {
      await axios({
        method: 'post',
        url: `http://localhost:8080/api/cart/${user_id}`,
        data: {
          product_id: item.id,
          quantity: 1,
        },
      })
        .then((res) => alert('Thêm thành công vào giỏ hàng'))
        .then((res) => res)
        .catch((err) => alert('đã xảy ra lỗi: ', err));

      getCartAPI().then((res) => dispatch(setCart(res)));
    }
  };

  return (
    <div
      style={{ width: '288px' }}
      className="wrapper d-flex flex-column rounded m-2 border border-info rounded-2xl hover:border-2 hover:border-[#1488d8]"
    >
      <div className="w-full h-72">
        <Link to={`/details?id=${item.id}`}>
          <LazyLoad height={300} threshold={0.95}>
            <img alt="item" src={item.thumbnail} className="w-100 image-fluid rounded-t-2xl" />
          </LazyLoad>
        </Link>
      </div>
      <div className="d-flex flex-column p-4 pt-0">
        <div className="mb-1 fs-6 font-bold">{item.name}</div>
        <Price className="ml-0 font-weight-bold">{item.price}</Price>
        <RateStar number={Math.round(item.overall_rating)} />
        <div className="mt-2 text-center">
          <Link to={`/details?id=${item.id}`}>
            <button className="btn btn-secondary mr-3">
              <GrIcons.GrView />
            </button>
          </Link>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            <AiIcons.AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
