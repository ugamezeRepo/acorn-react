import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'add':
      newState = [...state, action.payload];
      break;
    case 'remove':
      newState = state.filter((item) => item !== action.payload);
      break;
    default:
      newState = state;
      break;
  }
};

function Friends() {
  const [state, dispatch] = useReducer(reducer, []);
  const inputName = useRef();

  return (
    <div>
      <input ref={inputName} type="text" />
      <button
        onClick={() => {
          dispatch({
            type: 'add',
            payload: inputName.current.value,
          });
        }}
      >
        친구 추가
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'remove',
            payload: inputName.current.value,
          });
        }}
      >
        친구 제거
      </button>

      <ul>
        {state.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
