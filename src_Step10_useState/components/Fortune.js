import { Component } from 'react';

class Fortune extends Component {
  // component가 활성화될 때 호출되는 함수
  componentDidMount() {
    console.log('Fortune이 활성화됩니다.');
  }

  // component가 비활성화될 때 호출되는 함수
  componentWillUnmount() {
    console.log('Fortune이 비활성화됩니다.');
  }

  render() {
    return (
      <p>
        오늘의 운세 : <strong>{this.props.msg}</strong>
      </p>
    );
  }
}

export default Fortune;
