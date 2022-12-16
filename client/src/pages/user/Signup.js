import { Col, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import MyButton from "../../components/MyButton";
function Signup() {
    const [input, setinput] = useState({first_name: "", last_name: "", birthday: "", phone: "", email: "", address: "", username: "", password: "", passwordconfirm: ""});
    const [danger, setdanger] = useState({first_name: false, last_name: false, birthday: false, phone: false, email: false, address: false, username: false, password: false, passwordconfirm: false, signup: true});
    const [signup, setsignup] = useState(false);
    function SignupDB() {
        axios({
            method: "post",
            url: "http://localhost:8080/api/users/signup",
            data: {
                first_name: input.first_name,
                last_name: input.last_name,
                birthday: input.birthday,
                phone: input.phone,
                email: input.email,
                address: input.address,
                username: input.username,
                password: input.password
            },
        })
        .then((res) => {alert("Đăng kí thành công");setsignup(true);})
        .catch((res) => {alert(res);});
    };
    function handleChange(e) {
        setinput({ ...input, [e.target.name]: e.target.value });
    }
    function validatefirstname() {
        if (input.first_name === "") return false;
        return true;
    }
    function validatelastname() {
        if (input.last_name === "") return false;
        return true;
    }
    function validatebirthday() {
        if (input.birthday === "") return false;
        return true;
    }
    function validatephone() {
        if (input.phone === "") return false;
        return true;
    }
    function validateemail() {
        if (input.email === "") return false;
        return true;
    }
    function validateaddress() {
        if (input.address === "") return false;
        return true;
    }
    function validateusername() {
        if (input.username === "") return false;
        return true;
    }
    function validatepassword() {
        if (input.password === "") return false;
        return true;
    }
    function validatepasswordconfirm() {
        if (input.passwordconfirm !== input.password) return false;
        return true;
    }
    function handleSubmit(e) {
        e.preventDefault();
        
        setdanger({first_name: !validatefirstname(), last_name: !validatelastname(), birthday: !validatebirthday(), phone: !validatephone(), email: !validateemail(), username: !validateusername(), password: !validatepassword(), passwordconfirm: !validatepasswordconfirm(), address: !validateaddress(), signup: !((validatefirstname() && validatelastname() && validatebirthday() && validatephone() && validatephone() && validateusername() && validatepassword() && validatepasswordconfirm()))})
        if (!danger.signup) {
            SignupDB();
        }
    }
    return (
        <Container className="mt-5">
            <Row>
                <Container classname="d-flex justify-content-center">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">Đăng ký tài khoản</h2>
                </Container>
            </Row>
            <Row>
                <Container className="d-flex justify-content-center">
                    {signup && (<Navigate to="/login" replace={true} />)}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Tên</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" name="first_name" value={input.first_name} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.first_name ? "text-danger" : "visually-hidden" }`}>Please enter your first name</p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Họ</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" name="last_name" value={input.last_name} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.last_name ? "text-danger" : "visually-hidden" }`}>Please enter your last name</p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Ngày sinh</Form.Label>
                                    <Form.Control type="date" placeholder="Enter your bỉthday" name="birthday" value={input.birthday} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.birthday ? "text-danger" : "visually-hidden" }`}>Please enter your bỉthday</p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Số điện thoại</Form.Label>
                                    <Form.Control type="number" placeholder="Enter your phone number" name="phone" value={input.phone} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.phone ? "text-danger" : "visually-hidden" }`}>Please enter your phone</p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-100">
                                <Form.Label className="fw-bold">Địa chỉ Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" value={input.email} onChange={(e) => handleChange(e)}/>
                                <p className={` ${danger.email ? "text-danger" : "visually-hidden" }`}>Please enter your email</p>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-100">
                                <Form.Label className="fw-bold">Địa chỉ</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" name="address" value={input.address} onChange={(e) => handleChange(e)}/>
                                <p className={` ${danger.address ? "text-danger" : "visually-hidden" }`}>Please enter your address</p>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-100">
                                <Form.Label className="fw-bold">Tên tài khoản</Form.Label>
                                <Form.Control type="text" placeholder="Enter your username" name="username" value={input.username} onChange={(e) => handleChange(e)}/>
                                <p className={` ${danger.username ? "text-danger" : "visually-hidden" }`}>Please enter your username</p>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Mật khẩu</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" name="password" value={input.password} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.password ? "text-danger" : "visually-hidden" }`}>Please enter your password</p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 w-100">
                                    <Form.Label className="fw-bold">Xác nhận mật khẩu</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm your password" name="passwordconfirm" value={input.passwordconfirm} onChange={(e) => handleChange(e)}/>
                                    <p className={` ${danger.passwordconfirm ? "text-danger" : "visually-hidden" }`}>Password not match</p>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <MyButton primary className=" w-100" type="submit">
                            Đăng ký
                        </MyButton>
                        <p className={` ${danger.username ? "text-danger" : "visually-hidden" }`}>Please enter all of the information</p>
                        <MyButton to="/login"className="mt-2 w-100">
                            Đã có tài khoản
                        </MyButton>
                    </Form>
                </Container>
            </Row>
        </Container>
    );
}
export default Signup;
