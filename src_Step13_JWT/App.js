import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

/*
  [ CORS를 우회하기 위한 설정 ] 

  package.json 파일에 "proxy": "요청할 server url" 설정을 하면 자동으로 proxy 서버가 운영된다.

  "proxy": "http://localhost:9001/boot11" 설정 후, axios.post("/auth") 요청

  React 서버에 http://localhost:3000/auth 요청이 되고 해당 요청을 proxy가 받아
  http://localhost:9001/boot11/auth 요청을 한 다음 응답받은 데이터가 axios로 다시 전달한다.
*/

/*
  axios 기본 요청 경로에 package.json에 설정된 "homepage": "/boot11" 컨텍스트 경로를
  읽어와서 넣어주는 작업 시행
  개발할 때는 homepage 설정을 넣지 말고 build할 때만 넣어서 build한다.
*/

// 이 코드는 주석처리 하지 않아도 된다.
axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios
      .get('/notice', {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        // 응답된 데이터를 이용해 상태값 변경
        setNotice(res.data);
      });
  }, []);

  const [] = useState();
  const reqJwt = () => {
    // object를 전달하면 json 문자열이 서버에 전송되고 ContentType:application/json 설정도 axios가 해준다.
    axios
      .post('/auth', {
        userName: 'a',
        password: 'a',
      })
      .then((res) => {
        console.log(res.data);
        // 응답받은 JWT를 localStorage에 저장
        localStorage.token = 'Bearer+' + res.data;
      });
  };

  const reqPing = () => {
    axios
      .get('/ping', {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <button onClick={reqJwt}>JWT 발급받기</button>
      <button onClick={reqPing}>ping 요청</button>

      <h3>공지 사항</h3>
      {/* 페이지 로딩 시점에 공지사항이 출력되도록 코딩 */}
      <ul>
        {notice.map((e, i) => (
          <li key={'notice' + i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
