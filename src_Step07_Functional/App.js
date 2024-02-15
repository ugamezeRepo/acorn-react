import { useState } from 'react';
import './App.css';

function App() {
  /* 
    - userState()로 배열 리턴
    - [상태값, 상태값 변경 함수] 구조
    - userState(초기값);
  */
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    count: 0,
  });

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
      <button
        onClick={() => {
          // 버튼을 눌렀을 때 상태값을 변경하는 함수를 이용해 변경
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        {state.count}
      </button>
    </div>
  );
}

export default App;
