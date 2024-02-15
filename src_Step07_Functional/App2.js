import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    inputName: '',
    names: [],
    seq: 0,
  });

  const inputBtn = (e) => {
    if (state.inputName === '') return;

    setState({
      ...state,
      inputName: '',
      names: state.names.concat({
        name: state.inputName,
        seq: state.seq,
      }),
      seq: ++state.seq,
    });
  };
  return (
    <div className="container">
      <h1>인덱스 페이지2</h1>

      <input
        type="text"
        className="inputName"
        placeholder="이름 입력"
        onChange={(e) => {
          setState({ ...state, inputName: e.target.value, seq: state.seq });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') inputBtn();
        }}
        value={state.inputName}
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
