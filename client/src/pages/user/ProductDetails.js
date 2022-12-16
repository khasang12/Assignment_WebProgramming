import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Button, Col, Row, Tab, Nav, Table } from 'react-bootstrap';

import Price from '../../components/PriceDisplay/Price';
import RateStar from '../../components/User/RateStar';
import Comments from '../../components/User/Comments';
import { Link } from 'react-router-dom';
import { Context } from '../../stores';
import { addToCart, selectItem, setCart } from '../../stores/actions';
import ProductSpecificationsTable from '../../components/User/ProductSpecificationsTable';
import axios from 'axios';
import { useViewport } from '../../hooks/hooks';
import { getCartAPI } from '../../api/cartAPI';

function ProductDetails() {
  const [state, dispatch] = useContext(Context);
  const [urlParams, setURLParams] = useSearchParams();
  const [product, setProduct] = useState('');
  const [productRelates, setProductRelates] = useState('');
  const { width, size } = useViewport();

  let id = urlParams.get('id');
  const getProduct = async () => {
    return await axios.get(`http://localhost:8080/api/products/${id}`).then((res) => res.data);
  };
  const getProductsRelates = async (brand) => {
    if (brand) return await axios.get(`http://localhost:8080/api/products/all?brand=${brand}`).then((res) => res.data);
  };

  const getData = async () => {
    return await getProduct().then((res) => {
      setProduct(res);
      return getProductsRelates(res.brand).then((res) => setProductRelates(res));
    });
  };
  useEffect(() => {
    getData();
  }, [id]);

  //call API --> products
  const handleAddCart = async () => {
    if (sessionStorage.getItem('user')) {
      let user_id = JSON.parse(sessionStorage.getItem('user')).id;
      await axios({
        method: 'post',
        url: `http://localhost:8080/api/cart/${user_id}`,
        data: {
          product_id: id,
          quantity: 1,
        },
      })
        .then((res) => alert('Thêm thành công vào giỏ hàng'))
        .then((res) => res)
        .catch((err) => alert('đã xảy ra lỗi: ', err));

      getCartAPI().then((res) => dispatch(setCart(res)));
    } else {
      alert('Vui lòng đăng nhập để thực hiện tính năng này!');
    }
  };
  const handleBuy = async () => {
    if (sessionStorage.getItem('user')) {
      let user_id = JSON.parse(sessionStorage.getItem('user')).id;
      await axios({
        method: 'post',
        url: `http://localhost:8080/api/cart/${user_id}`,
        data: {
          product_id: id,
          quantity: 1,
        },
      }).catch((err) => alert('đã xảy ra lỗi: ', err));

      await getCartAPI().then((res) => dispatch(setCart(res)));
      dispatch(selectItem(Number(id)));
    } else {
      alert('Vui lòng đăng nhập để thực hiện tính năng này!');
    }
  };

  return (
    <React.Fragment>
      {product && (
        <div className="container">
          <div className="row">
            <div className="product-info col-lg-12 col-xl-9">
              <div className="row">
                <div className="product-imanges col-6 p-3 border d-flex flex-column align-items-center">
                  <img className="w-100 border" src={product.thumbnail} alt="" />
                </div>
                <div className="product-overview col-6 p-3">
                  <h2>{product.name}</h2>
                  <div className="d-flex align-items-center">
                    <RateStar number={5} size={24} />
                    <a href="#comment" className="ml-2 text-primary">
                      Xem {product.num_rates} đánh giá
                    </a>
                  </div>
                  <div className="my-4">
                    <Price className="ml-0" large>
                      {product.price}
                    </Price>
                  </div>
                  <ul className="list-group d-none d-md-block">
                    <li className="list-group-item">CPU: {product.cpu}</li>
                    <li className="list-group-item">VGA: {product.gpu}</li>
                    <li className="list-group-item">RAM: {product.ram}</li>
                    <li className="list-group-item">Ổ cứng: {product.disk}</li>
                    <li className="list-group-item">
                      Màn hình: {`${product.screen_size} (${product.resolution}) ${product.screen_tech}`}
                    </li>
                  </ul>
                  <div className="mt-4 container">
                    <div className="d-flex mb-2 row justify-content-between">
                      <Button
                        variant="primary"
                        className="col-12 col-lg-5 px-2 py-2 mt-2 text-nowrap"
                        onClick={handleAddCart}
                      >
                        Thêm vào giỏ hàng
                      </Button>
                      <Link
                        to={sessionStorage.getItem('user')?"/cart":"/login"}
                        className="col-12 col-lg-5 btn btn-primary px-2 py-2 bg-primary mt-2"
                        onClick={handleBuy}
                      >
                        Mua ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Tab.Container defaultActiveKey="first">
                <Row className="mt-5">
                  <Nav variant="pills" className="d-flex">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="px-xl-5 px-lg-5 font-weight-bold">
                        Mô tả sản phẩm
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="px-xl-5 px-lg-5 font-weight-bold">
                        Thông số kỹ thuật
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="px-xl-5 px-lg-5 font-weight-bold">
                        Đánh giá sản phẩm
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Row>

                <Row className="border mb-5 p-3">
                  <Col sm={9} className="w-100">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p className="text-justify">{product.description}</p>
                        <img src={product.thumbnail} alt="" width="100%" className="" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="row text-center border p-2 mb-4">
                          <h4 className="m-0">Thông số kỹ thuật</h4>
                        </div>
                        <ProductSpecificationsTable product={product} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="product-user-review container mb-5 mt-3 p-0">
                          <Comments product_id={id} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
            <div
              className="col-lg-12 col-xl-3 border px-0"
              style={width >= 1200 ? { maxHeight: '120vh', overflow: 'scroll' } : {}}
            >
              <div className="text-white py-3 m-0 w-100 text-center bg-primary">
                <b> CÓ THỂ BẠN THÍCH</b>
              </div>
              {productRelates &&
                productRelates.map((item, index) => {
                  return (
                    <Link key={index} to={`/details?id=${item.id}`}>
                      <div className="d-flex align-items-start border-bottom py-3 px-2">
                        <img src={item.thumbnail} width="120px" alt="" />
                        <div>
                          <p className="text-overflow-ellipsis-2 mb-3">{item.name}</p>
                          <Price className="font-weight-bold ml-0">{item.price}</Price>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductDetails;
