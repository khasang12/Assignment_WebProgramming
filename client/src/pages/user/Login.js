import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Login() {
  return (
    <div class="container">
        <Col>
            <Row className="d-flex">
                <Col>
                    <h2 className="fw-bold mb-2 text-uppercase ">Đăng nhập tài khoản</h2>
                </Col>
                <Col>
                    <p className="fw-normal mb-2">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>
                </Col>
            </Row>
            <Row className="d-flex">
                <Col md={8} lg={6} xs={12}>
                        <div className="mb-3 mt-md-4 ">
                        <div className="mb-3">
                            <Form>
                            <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                Tên tài khoản
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group
                                className="mb-3 w-75"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                            </Form.Group>
                            <div className="d-grid w-25">
                                <Button variant="primary" type="submit">
                                Đăng nhập
                                </Button>
                            </div>
                            </Form>
                        </div>
                        </div>
                </Col>
                <Col md={8} lg={6} xs={12} className="justify-content-right">
                        <div className="mb-3 mt-md-4">
                        
                        <div className="mb-3">
                            <Form>
                            <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <div className="d-grid w-25">
                                <Button className="bg-primary" type="submit">
                                Lấy lại mật khẩu
                                </Button>
                            </div>
                            </Form>
                        </div>
                        </div>
                </Col>
            </Row>
        </Col>
        
    </div>
  );
}
export default Login;