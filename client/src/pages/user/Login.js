import { Col, Row, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyButton from '../../components/MyButton';

function Login() {
  var linkto = '/';
  const navigate = useNavigate();
  const [input, setinput] = useState({ username: '', password: '', email: '' });
  const [danger, setdanger] = useState({ username: false, password: false, email: false, login: false });
  const [forget, setforget] = useState(false);
  async function LoginDB() {
    await axios({
      method: 'put',
      url: 'http://localhost:8080/api/users/login',
      data: {
        username: input.username,
        password: input.password,
      },
    })
      .then((res) =>
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            type: res.type,
            id: res.data.data.id,
            name: res.data.data.first_name + ' ' + res.data.data.last_name,
            email: res.data.data.email,
            token: res.data.data.token,
          }),
        ),
      )
      .then(() => (sessionStorage.getItem('user')['type'] === 'admin' ? navigate('/admin') : navigate('/')))
      .catch((res) => {
        alert('404 - Incorrect Username or Password');
      });
    window.location.reload();
  }
  function handleChange(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }
  function validatepassword() {
    if (input.username === '') {
      return false;
    } else {
      return true;
    }
  }
  function validateusername() {
    if (input.username === '') {
      return false;
    } else {
      return true;
    }
  }
  function handleSubmitLogin(e) {
    e.preventDefault();
    if (validateusername()) {
      if (validatepassword()) {
        LoginDB(input);
      }
    }
  }
  function validateemail() {
    if (input.email === '') return false;
    else return true;
  }
  const handleSubmitForget = (e) => {
    e.preventDefault();
    if (validateemail()) {
      setforget(true);
    } else setdanger({ password: false, username: false, login: false, email: true });
  };
  return (
    <Container>
      <Row>
        <Col md={8} lg={6} xs={12}>
          <Row>
            <h2 className="fw-bold mb-2 text-uppercase ">Đăng nhập tài khoản</h2>
          </Row>
          <Row className="mb-3 mt-md-4 ">
            <Form onSubmit={(e) => handleSubmitLogin(e)}>
              <Form.Group className="mb-3 w-75">
                <Form.Label className="text-center">Tên tài khoản</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={input.username}
                  onChange={(e) => handleChange(e)}
                />
                <p className={` ${danger.username ? 'text-danger' : 'visually-hidden'}`}>
                  Please enter a valid username
                </p>
              </Form.Group>

              <Form.Group className="mb-3 w-75">
                <Form.Label className="text-center">Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                />
                <p className={` ${danger.password ? 'text-danger' : 'visually-hidden'}`}>
                  Please enter a valid password
                </p>
              </Form.Group>
              <div>
                <MyButton primary className="w-75" type="submit">
                  Đăng nhập
                </MyButton>
                <p className={` ${danger.login ? 'text-danger' : 'visually-hidden'}`}>Wrong login detail</p>
                <MyButton className="w-75 mt-2" to="/signup">
                  Chưa có tài khoản? Đăng kí
                </MyButton>
              </div>
            </Form>
          </Row>
        </Col>
        <Col>
          <Row>
            <p className="mb-2">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>
          </Row>
          <Row className="mb-3 mt-md-4 ">
            {forget && <Navigate to="/" replace={true} />}
            <Form onSubmit={(e) => handleSubmitForget(e)}>
              <Form.Group className="mb-3 w-75">
                <Form.Label className="text-center">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                <p className={` ${danger.email ? 'text-danger' : 'visually-hidden'}`}>Please enter a valid email</p>
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
