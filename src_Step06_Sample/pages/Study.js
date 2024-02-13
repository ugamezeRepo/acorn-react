// src/pages/Study.js

import { Link, Route, useNavigate, useNavigation } from 'react-router-dom';
import { Routes, NavLink } from 'react-router-dom';
import Eng from './Eng';
import Math from './Math';

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

        <ul>
          <li>
            <NavLink to="/Study/Math">수학공부</NavLink>
          </li>
          <li>
            <NavLink to="/Study/Eng">영어공부</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/Math" Component={Math}></Route>
          <Route path="/Eng" Component={Eng}></Route>
        </Routes>

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
