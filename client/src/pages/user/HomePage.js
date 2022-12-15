import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ItemsList from '../../components/Home/ItemList';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../stores';
import { setCart, setUser } from '../../stores/actions';
import { getCartAPI } from '../../api/cartAPI';

function HomePage() {
  const [img, setImg] = useState([]);
  const [items, setItems] = useState([]);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    getProducts().then((data) => setItems(data));
  }, []);
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      getHomeImages();
    }, 1000);

    return () => window.clearTimeout(timeoutID);
  }, []);
  const getProducts = async () => {
    return axios.get('http://localhost:8080/api/products/all').then((res) => res.data);
  };
  const getHomeImages = async () => {
    await axios
      .get('http://localhost:8080/api/upload/slider')
      .then((response) => {
        setImg(response.data);
      })
      .catch((res) => alert(res));
  };
  return (
    <div class="container mt-8 pt-5 pt-md-0 mt-md-4">
      {/* <MyButton className="m-5" primary to="/details?id=P123456577">
                Goto Product details
            </MyButton> */}
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            {img[0] ? <img src={img[0].data} class="block w-full align-items-center object-contain" alt="..." /> : ''}
          </div>
          <div class="carousel-item relative float-left w-full">
            {img[1] ? <img src={img[1].data} class="block w-full align-items-center object-contain" alt="..." /> : ''}
          </div>
          <div class="carousel-item relative float-left w-full">
            {img[2] ? <img src={img[2].data} class="block w-full align-items-center object-contain" alt="..." /> : ''}
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <a id="items-display" name="anchor"></a>
      </div>
      <div className="fs-1 p-10 my-5 font-size text-center">Tin đăng mới</div>
      <ItemsList items={items} />
    </div>
  );
}

export default HomePage;
