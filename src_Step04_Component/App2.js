// src/App2.js

import { Component } from 'react';
// ListComponent import
import List from './components/ListComponent';

class App2 extends Component {
  state = {
    friends: ['김구라', '해골', '원숭이', '주뎅이', '덩어리'],
    animals: ['dog', 'cat', 'elephant'],
  };

  render() {
    console.count('App2 render()');
    return (
      <div className="container">
        <h1>친구 목록</h1>
        <input
          ref={(refValue) => {
            // 함수가 전달되는 참조값을 필드에 저장
            this.inputNum = refValue;
          }}
          type="text"
          placeholder="친구 이름 입력"
        />
        <button
          onClick={() => {
            // 1. input 요소에 입력한 문자열을 읽어와서
            const name = this.inputNum.value;
            // 2. 해당 문자열이 추가된 새로운 배열을 얻어내서
            const newArray = this.state.friends.concat(name);
            // 3. state 업데이트
            this.setState({ ...this.state, friends: newArray });
          }}
        >
          추가
        </button>
        <List
          list={this.state.friends}
          onDelete={(idx) => {
            // idx번 째 인덱스가 제거된 새로운 배열 생성
            const newArray = this.state.friends.filter(
              (_, index) => index !== idx
            );
            const newState = {
              ...this.state, // 먼저 기존의 state값을 펼친 후
              friends: newArray, // 수정할 state만 수정
            };
            // 상태값으로 관리하고있는 friends에 덮어쓰기
            this.setState(newState);
          }}
        ></List>

        <h1>동물 목록</h1>
        <input
          ref={(refValue) => {
            this.inputAnimal = refValue;
          }}
          type="text"
          placeholder="동물이름 입력"
        />
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              animals: this.state.animals.concat(this.inputAnimal.value),
            });
          }}
        >
          추가
        </button>
        <List
          list={this.state.animals}
          onDelete={(idx) => {
            this.setState({
              ...this.setState,
              animals: this.state.animals.filter((_, index) => index !== idx),
            });
          }}
        ></List>
      </div>
    );
  }
}

export default App2;
