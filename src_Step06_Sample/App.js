import { Component } from 'react';
import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Play, Study, Todos } from './pages';
// bootstrap css 로딩
import './css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Router를 이용한 SPA 테스트</h1>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Study" className="nav-link">
              Study
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Study/Math" className="nav-link">
              수학 공부
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Study/Eng" className="nav-link">
              영어 공부
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Play" className="nav-link">
              Play
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Todos" className="nav-link">
              Todos
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Study/*" Component={Study} />
          <Route path="/Play" Component={Play} />
          <Route path="/Todos" Component={Todos} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </div>
    );
  }
}

export default App;
