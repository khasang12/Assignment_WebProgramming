
import { Col, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import MyButton from "../../components/MyButton";

function Login() {
    
    const [input, setinput] = useState({username: "", password: "", email: ""});
    const [danger, setdanger] = useState({username: false, password: false, email: false, login: false});
    const [login, setlogin] = useState(false);
    const [forget, setforget] = useState(false);
    const [logininfo, setlogininfo] = useState({id: null, first_name: null, last_name: null});
    function LoginDB() {
        axios({
            method: "put",
            url: "http://localhost:8080/api/users/login",
            data: {
                username: input.username,
                password: input.password
            },
        })
        .then((res) => {return setlogininfo({id: res.data[0]['id'], last_name: res.data[0]['last_name'], first_name: res.data[0]['first_name']});})
        .catch((res) => {alert(res)});
    }
    function handleChange(e) {
        setinput({ ...input, [e.target.name]: e.target.value });
    }
    function validatepassword() {
        if (input.username === "") {
            return false;
        }
        else
        {
            return true;
        }
    }
    function validateusername(){
        if (input.username === "") {
            return false;
        }
        else {
            return true;
        }
    }
    function handleSubmitLogin(e) {
        e.preventDefault();
        if (validateusername()) {
            if (validatepassword()) {
                LoginDB(input);
                if (logininfo['id'] !== null) {
                    sessionStorage.setItem("first_name", logininfo['first_name']);
                    sessionStorage.setItem("last_name", logininfo['last_name']);
                    sessionStorage.setItem("id", logininfo['id']);
                    setlogin(true);
                    setinput({ username: "", password: "", email: "" });
                }
                else setdanger({username: danger.username, password: danger.password, login: true, email:false});
            }
            else setdanger({password: true, username: danger.username, login:false, email:false});
        }
        else setdanger({password: danger.password, username: true, login: false, email: false});
    }
    function validateemail() {
        if (input.email === "") return false;
        else return true;
    }
    const handleSubmitForget = (e) => {
        e.preventDefault();
        if (validateemail()) {
            setforget(true);
        }
        else setdanger({password: false, username: false, login: false, email: true});
    }
    return (
        <Container>
            <Row>
                <Col md={8} lg={6} xs={12} >
                    <Row>
                        <h2 className="fw-bold mb-2 text-uppercase ">Đăng nhập tài khoản</h2>
                    </Row>
                    <Row className="mb-3 mt-md-4 ">
                    {login && (<Navigate to="/" replace={true} />)}
                        <Form onSubmit={(e) => handleSubmitLogin(e)}>
                            <Form.Group className="mb-3 w-75">
                                <Form.Label className="text-center">Tên tài khoản</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="username" value={input.username} onChange={(e) => handleChange(e)}/>
                                <p className={` ${danger.username ? "text-danger" : "visually-hidden" }`}>Please enter a valid username</p>
                            </Form.Group>

                            <Form.Group className="mb-3 w-75">
                                <Form.Label className="text-center">Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name="password" value={input.password} onChange={(e) => handleChange(e)}/>
                                <p className={` ${danger.password ? "text-danger" : "visually-hidden" }`}>Please enter a valid password</p>
                            </Form.Group>
                            <div>
                                <MyButton primary className="w-75" type="submit">
                                        Đăng nhập
                                </MyButton>
                                <p className={` ${danger.login ? "text-danger" : "visually-hidden" }`}>Wrong login detail</p>
                                <MyButton className="w-75 mt-2" to='/signup'>
                                        Chưa có tài khoản
                                </MyButton>
                            </div>    
                        </Form>
                    </Row>
                </Col>
                <Col >
                    <Row>
                        <p className="mb-2">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>
                    </Row>
                    <Row className="mb-3 mt-md-4 ">
                    {forget && (<Navigate to="/" replace={true} />)}
                        <Form onSubmit={(e) => handleSubmitForget(e)}>
                            <Form.Group className="mb-3 w-75">
                                <Form.Label className="text-center">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={input.email} onChange={handleChange}/>
                                <p className={` ${danger.email ? "text-danger" : "visually-hidden" }`}>Please enter a valid email</p>
                            </Form.Group>

                            <MyButton primary className="w-75" type="submit">
                            Lấy lại mật khẩu
                            </MyButton>
                        </Form>
                    </Row>
                </Col>
            </Row> 
        </Container>
    );
}
export default Login;
