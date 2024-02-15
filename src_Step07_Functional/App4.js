import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    names: [],
    seq: 0,
  });

  const inputBtn = () => {
    setState({
      ...state,
      names: [
        ...state.names,
        { name: inputName.current.value, seq: state.seq },
      ],
      seq: ++state.seq,
    });
    inputName.current.value = '';
    inputName.current.focus();
  };

  // useRef() 훅 사용 (return은 object이다.)
  let inputName = useRef();

  return (
    <div className="container">
      <h1>인덱스 페이지4</h1>

      <input
        ref={inputName}
        type="text"
        className="inputName"
        placeholder="이름 입력"
        onKeyDown={(e) => {
          if (e.key === 'Enter') inputBtn();
        }}
      />
      <button onClick={() => inputBtn()}>추가</button>
      <ul>
        {state.names.map((item) => (
          <li key={item.seq}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
