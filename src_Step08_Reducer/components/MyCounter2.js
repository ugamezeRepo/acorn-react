// src/components/MyCounter.js

import React, { useReducer } from 'react';

// reducer (차원을 감소 시키는?) 함수 생성
// 현재 state와 action을 전달받아 새로운 state 값을 리턴하는 함수
const reducer = (count, action) => {
  let newCount;

  switch (action) {
    case 'minus':
      newCount = --count;
      break;
    case 'plus':
      newCount = ++count;
      break;
    default:
      newCount = count;
      break;
  }

  return newCount;
};

function MyCounter2() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button
        onClick={() => {
          dispatch('minus');
        }}
      >
        -
      </button>
      <strong>{count}</strong>
      <button
        onClick={() => {
          dispatch('plus');
        }}
      >
        +
      </button>
    </div>
  );
}

export default MyCounter2;
