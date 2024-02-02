import { Component } from 'react';
import './App.css';

class App extends Component {
  // 상태값(state) 정의
  state = {
    count: 0,
  };

  // 버튼 Click Event Listener 함수
  buttonClicked = () => {
    // state(상태값) 변경시키기

    // state값을 직접 수정시킬 경우, UI에 자동 반영 X
    // this.state.count++;
    // console.log(this.state.count);

    // [ 상태를 변화시켜야 UI가 update된다. ]

    // 부모(React.Component)가 가지고있는 setState() 함수를 호출하면서
    // 새로운 object의 참조값을 전달해야 상태가 변경되었다고 간주

    // 위 내용을 줄여서 아래와 같이 쓸 수 있다.
    this.setState({
      count: this.state.count++,
    });
  };

  render() {
    return (
      <div>
        <h1>인덱스 페이지!!!</h1>
        {/* jsx에서 state는 this.state 형식으로 참조 가능 */}
        <button onClick={this.buttonClicked}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
