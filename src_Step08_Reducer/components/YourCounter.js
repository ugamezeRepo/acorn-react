import React, { useReducer } from 'react';

const reducer = (state, action) => {
  let newState;

  switch (action) {
    case 'minus':
      newState = { ...state, count: state.count - 1 };
      break;
    case 'plus':
      newState = { ...state, count: state.count + 1 };
      break;
    default:
      break;
  }

  return newState;
};

function YourCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button
        onClick={() => {
          dispatch('minus');
        }}
      >
        -
      </button>
      <strong>{state.count}</strong>
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

export default YourCounter;
