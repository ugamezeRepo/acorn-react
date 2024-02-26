import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useRef } from 'react';
import AComponent from './components/AComponent';
import BComponent from './components/BComponent';

function App() {
  // redux store에서 관리되는 state 얻어내기
  const userName = useSelector((state) => {
    return state.userName;
  });
  // action을 발행할 함수 얻어내기
  const dispatch = useDispatch();
  const inputName = useRef();

  const updateBtn = () => {
    // redux store에서 관리되는 상태를 수정하기 위해 action을 dispatch
    const action = {
      type: 'UPDATE_USER',
      payload: inputName.current.value,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
      <p>
        사용자명: <strong>{userName}</strong>
      </p>
      <input ref={inputName} type="text" placeholder="사용자명 입력" />
      <button
        onClick={updateBtn}
      >
        사용자명 추가
      </button>
      <AComponent />
      <BComponent />
    </div>
  );
}

export default App;
