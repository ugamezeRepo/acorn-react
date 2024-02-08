// src/pages/Study.js

import { Link, useNavigate, useNavigation } from 'react-router-dom';

const { Component } = require('react');

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Study extends Component {
  componentDidMount() {
    console.log('Study component mounted!');
  }
  componentWillUnmount() {
    console.log('Study component will unmount!');
  }
  render() {
    return (
      <>
        <h3>Study 페이지</h3>
        <p>열심히 공부해요~</p>
        <Link to="/">Home</Link>
        <button
          onClick={() => {
            //javascript로 이동
            this.props.navigate('/');
          }}
        >
          Home
        </button>
      </>
    );
  }
}

export default withNavigation(Study);
