// src/pages/NotFound.js

import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <>
        <h3>404 NotFound</h3>
        <p>요청한 페이지는 존재하지 않는 페이지입니다</p>

        <Link to="/">HOME</Link>
      </>
    );
  }
}

export default NotFound;
