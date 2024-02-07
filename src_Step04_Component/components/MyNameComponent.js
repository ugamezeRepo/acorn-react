// MyNameComponent.js

import { Component } from 'react';

class MyName extends Component {
  render() {
    // 부모 Component에서 전달한 값(properties) 추출
    const name = this.props.name;

    return (
      <p>
        내 이름은: <strong>{name}</strong> 입니다.
        <button
          onClick={() => {
            this.props.action();
          }}
        >
          눌러보기
        </button>
      </p>
    );
  }
}

export default MyName;
