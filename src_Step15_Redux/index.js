import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js 를 import 해서
import App from './App2';
import reportWebVitals from './reportWebVitals';
// legacy_createStore 를 createStore 라는 이름으로 사용하기 (store 를 만들 함수)
import { legacy_createStore as createStore } from 'redux';
// store(저장소) 공급자
import { Provider } from 'react-redux';

// store 에서 관리될 초기 상태값
const initialState = {
  userName: null,
  isLogin: false,
};

// reducer 함수
const reducer = (state = initialState, action) => {
  // state와 action을 전달받아 새 state 리턴
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, userName: action.payload }
    case 'SET_LOGIN':
      return { ...state, isLogin: action.payload }
    default:
      return state;
  }
};
// reducer 함수를 인자로 전달해 store(저장소) 생성
const store = createStore(reducer);

// id가 root인 곳에 UI 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
