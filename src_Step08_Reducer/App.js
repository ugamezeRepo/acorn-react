import { useRef, useState } from 'react';
import './App.css';
import MyCounter from './components/MyCounter';
import MyCounter2 from './components/MyCounter2';
import YourCounter from './components/YourCounter';
import Friends from './components/Friends';

function App() {
  let inputName = useRef();

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <h3>MyCounter</h3>
      <MyCounter />

      <h3>MyCounter2</h3>
      <MyCounter2 />

      <h3>YourCounter</h3>
      <YourCounter />

      <h3>Friends</h3>
      <Friends />
    </div>
  );
}

export default App;
