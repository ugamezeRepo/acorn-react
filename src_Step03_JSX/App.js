import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // jsx 객체를 만들어 변수에 담기
    let p1 = <p>p1</p>;
    let msgs = [<p>안녕</p>, <p>나야나</p>, <p>나는야 jsx</p>];
    // 데이터만 들어있는 배열
    let animalls = ['Cat', 'Dog', 'Elephant'];
    // 데이터가 들어있는 배열을 이용해 jsx 배열 생성
    let result = animalls.map((item) => {
      return <li>{item}</li>;
    });
    let result2 = animalls.map((item) => <li>{item}</li>);

    return (
      <div>
        <h1>인덱스 페이지</h1>
        {p1}
        {msgs}
        <ul>{result}</ul>
        <ul>{result2}</ul>
        <ul>
          {animalls.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
