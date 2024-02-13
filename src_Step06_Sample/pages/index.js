/*
  index.js 파일은 폴더를 import해서 안에 들어있는 자원들을
  좀 더 편리하게 가져가서 사용할import Home from './Home';
 수 있게한다.import NotFound from './NotFound';

  특정 폴더의 목차 역할을 한다.
*/

export { default as Home } from './Home';
export { default as Play } from './Play';
export { default as Study } from './Study';
export { default as Todos } from './Todos';
export { default as NotFound } from './NotFound';
