import { Button } from 'react-bootstrap';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Price from '../../components/PriceDisplay/Price';
import RateStar from '../../components/User/RateStar';
import { product } from './fakeData';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Comments from '../../components/User/Comments';
import { Link } from 'react-router-dom';

function ProductDetails() {
    return (
        <React.Fragment>
            <div className="container pt-5">
                <div className="row">
                    <div className="product-info col-lg-12 col-xl-9">
                        <div className="row">
                            <div className="product-imanges col-6 p-3 border d-flex flex-column align-items-center">
                                <img className="w-100 border" src={product.image} alt="" />
                                <div className="d-flex justify-content-between align-items-center w-100 px-5">
                                    <AiOutlineLeft />
                                    {product.thumbnails.map((item, index) => {
                                        return (
                                            <img className="border" width={'20%'} key={index} src={item.path} alt="" />
                                        );
                                    })}
                                    <AiOutlineRight />
                                </div>
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
                                    <Price className="ml-0 " large>
                                        {product.price}
                                    </Price>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item">CPU: {product.cpu}</li>
                                    <li className="list-group-item">VGA: {product.gpu}</li>
                                    <li className="list-group-item">RAM: {product.ram}</li>
                                    <li className="list-group-item">Ổ cứng: {product.disk}</li>
                                    <li className="list-group-item">
                                        Màn hình:{' '}
                                        {`${product.screen_size} (${product.resolution}) ${product.screen_tech}`}
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <div className="d-flex mb-2">
                                        <Button variant="warning" className=" px-2 py-2 mr-4 w-50">
                                            So sánh mặt hàng
                                        </Button>
                                        <Button variant="primary" className=" px-2 py-2 w-50">
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                    <Button className="w-100 px-2 py-2 bg-primary">Mua ngay</Button>
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
                                </Nav>
                            </Row>

                            <Row className="border mb-5 p-3">
                                <Col sm={9} className="w-100">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p className="text-justify">{product.description}</p>
                                            <img src={product.imageDescription} alt="" width="100%" className="" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h1>Tab 2</h1>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                        <div className="product-user-review container mb-5 p-0">
                            <Comments />
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-3 border px-0">
                        <div className="text-white py-3 m-0 w-100 text-center bg-primary">
                            <b> CÓ THỂ BẠN THÍCH</b>
                        </div>
                        {product.relate.map((item, index) => {
                            return (
                                <Link key={index} to={`/details?id=${item.id}`}>
                                    <div className="d-flex align-items-start border-bottom py-3 px-2">
                                        <img src={item.images} alt="" />
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
        </React.Fragment>
    );
}

export default ProductDetails;
