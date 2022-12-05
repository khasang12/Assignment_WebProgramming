
import { Col, Button, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
function LoginDB(input) {
    return true;
}
function Login() {
    const [input, setinput] = useState({username: "", password: "", email: ""});
    const [danger, setdanger] = useState({username: false, password: false, email: false, login: false});
    const [login, setlogin] = useState(false);
    const [forget, setforget] = useState(false)
    function handleChange(e) {
        setinput({ ...input, [e.target.name]: e.target.value });
    }
    function validatepassword() {
        var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(input.password.match(passw)) 
        { 
            return true;
        }
        else
        {
            setinput({password: "", username : input.username, email: input.email});
            return false;
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
                if (LoginDB(input)) {
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
                            <Button className="bg-primary d-grid w-25" type="submit">
                                Đăng nhập
                            </Button>
                            <p className={` ${danger.login ? "text-danger" : "visually-hidden" }`}>Wrong login detail</p>
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

                            <Button className="bg-primary d-grid w-28" type="submit">
                            Lấy lại mật khẩu
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Row> 
        </Container>
    );
}
export default Login;
