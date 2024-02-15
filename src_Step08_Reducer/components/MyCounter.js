// src/components/MyCounter2.js

import React from 'react';
import { useState } from 'react';

function MyCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <strong>{count}</strong>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default MyCounter;
