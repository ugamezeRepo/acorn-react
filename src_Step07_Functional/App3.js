import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    names: [],
    seq: 0,
  });

  let inputName = null;

  const inputBtn = () => {
    if (inputName.value === '') return;

    setState({
      ...state,
      names: [...state.names, { name: inputName.value, seq: state.seq }],
      seq: ++state.seq,
    });
    inputName.value = '';
  };

  return (
    <div className="container">
      <h1>인덱스 페이지3</h1>

      <input
        ref={(refValue) => {
          inputName = refValue;
        }}
        type="text"
        className="inputName"
        placeholder="이름 입력"
        onKeyDown={(e) => {
          if (e.key === 'Enter') inputBtn();
        }}
        value={inputName}
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
