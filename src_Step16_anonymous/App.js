import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberForm from './pages/MemberForm';
import { Alert, Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { decodeToken } from 'jsontokens';
import 'bootstrap/dist/css/bootstrap.css'
import MemberUpdateForm from './pages/MemberUpdateForm';
import BsNavBar from './components/BsNavBar';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  useEffect(() => {
    if (localStorage.token) {
      // 토큰 디코딩
      const result = decodeToken(localStorage.token);
      // 토큰 만료시간
      const expTime = result.payload.exp * 1000; // 초단위를 ms초로 변경
      // 현재 시간
      const now = new Date().getTime(); // 현재시간을 ms초 단위로 추출
      // 만일 유효기간이 만료되었다면
      if (expTime < now) {
        dispatch({ type: 'SET_LOGIN', payload: false });
      } else { // 유효기간이 만료되지 않았다면 로그인된 상태로 간주
        dispatch({ type: 'SET_LOGIN', payload: true });
        dispatch({ type: 'UPDATE_USER', payload: result.payload.sub });
        // axios의 header에 인증정보를 기본으로 가지고갈 수 있도록 설정
        axios.defaults.headers.common["Authorization"] = `Bearer+${localStorage.token}`;
      }
    }
  });

  return (
    <>
      <BsNavBar />

      <Container>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/members" Component={Member} />
          <Route path="/members/new" Component={MemberForm} />
          <Route path="/members/:num/edit" Component={MemberUpdateForm} />
        </Routes>
        <LoginModal show={!isLogin} />
      </Container>
    </>
  )
}

function LoginModal(props) {
  // 입력한 userName과 password를 상태값으로 처리
  const [state, setState] = useState({});
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  // input 요소
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // 로그인 버튼을 눌렀을 때 실행할 함수
  const handleSubmit = () => {
    (async () => await axios.post('/auth', state)
      .then(res => {
        // 로그인 성공이면 여기가 실행되면서 JWT 가 발급되고
        console.log(res.data);
        // 토큰을 localStorage에 저장
        localStorage.token = res.data;
        // 모달창을 숨기고
        dispatch({ type: 'SET_LOGIN', payload: true });
        // 에러 정보를 없앤다
        setError(false);
        // 토큰을 디코딩해서 사용자 정보를 얻어온다
        const result = decodeToken(localStorage.toke);
        console.log(result);
        // 토큰에 저장된 주제 얻어내기
        const userName = result.payload.sub;

        // userName 를 수정하는 dispatch, isLogin 을 수정하는 dispatch
        dispatch({ type: 'UPDATE_USER', payload: userName });
      })
      //아이디 혹은 비밀번호가 틀리면 여기가 실행된다.
      .catch(_ => setError(true))
    )();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          로그인이 필요 합니다.
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
          <Form.Control onChange={handleChange} name="userName" type="text" placeholder="User Name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
        </FloatingLabel>
        {isError && <Alert variant="danger">아이디 혹은 비밀번호가 틀렸습니다</Alert>}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleSubmit}>로그인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
