import { useState } from 'react';
import './App.css';

function App() {
  // 로그인 여부를 관리할 state
  const [isLogin, setLogin] = useState(false);
  // 선택한 무기를 관리할 state
  const [weapon, setWeapon] = useState('sword');

  function getComment() {
    switch (weapon) {
      case 'gun':
        return <p>총으로 공격합니다.</p>;
      case 'sword':
        return <p>칼로 공격합니다.</p>;
      case 'bow':
        return <p>활로 공격합니다.</p>;
      default:
        return <p>무기 선택</p>;
    }
  }

  const comment = {
    gun: <p>총으로 공격합니다.</p>,
    sword: <p>칼로 공격합니다.</p>,
    bow: <p>활로 공격합니다.</p>,
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <button
        onClick={() => {
          setLogin(true);
        }}
      >
        테스트 로그인
      </button>
      {/* null은 react가 출력하지 않는다. */}
      {isLogin ? null : <p>로그인이 필요합니다.</p>}
      {!isLogin ? <p>로그인이 필요합니다.</p> : null}
      {!isLogin && <p>로그인이 필요합니다.</p>}

      <select
        value={weapon}
        onChange={(e) => {
          // 선택한 value값으로 변경
          setWeapon(e.target.value);
        }}
      >
        <option>선택</option>
        <option value="gun">총</option>
        <option value="sword">칼</option>
        <option value="bow">활</option>
      </select>

      {getComment()}
      {comment[weapon]}
    </div>
  );
}

export default App;
