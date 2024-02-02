import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    msg: '',
  };

  // input 요소에 input 이벤트가 일어날 때마다 호출되는 함수
  onInput = (e) => {
    // 입력한 문자열
    const msg = e.target.value;
    // state를 변경
    this.setState({
      msg: msg,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        <input type="text" onInput={this.onInput} />
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default App;
