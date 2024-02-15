import { useState } from 'react';
import './App.css';
import Todo2 from './components/Todo2';
import Todo from './components/Todo';
import Fortune from './components/Fortune';
import Fortune2 from './components/Fortune2';

function App() {
  const [isShow, setShow] = useState(false);
  const handleChange = (e) => {
    setShow(e.target.checked);
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <label>
        Todo, Forutne
        <input type="checkbox" checked={isShow} onChange={handleChange} />
      </label>

      {isShow && <Todo />}
      {isShow && <Todo2 />}
      {isShow && <Fortune msg={'동쪽으로 가면 귀인을 만나요'} />}
      {isShow && <Fortune2 msg={'오후에 비가 그칠 거에요'} />}
    </div>
  );
}

export default App;
