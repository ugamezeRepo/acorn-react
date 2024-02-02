// App.css 적용 (내부 css)
import { Component } from 'react';
import './App.css';

// 클래스형 Compoenent
class App extends Component {
  // render() 함수에서 리턴하는 jsx로 화면이 구성된다.
  render() {
    return (
      <div>
        <h1>인덱스 페이지</h1>
      </div>
    );
  }
}

// 외부에서 App.js를 import하면 App함수를 사용할 수 있다. (index.js)
export default App;
