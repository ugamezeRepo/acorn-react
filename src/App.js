import { Component } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';
import Study from './pages/Study';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Router를 이용한 SPA 테스트</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/study">Study</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Study" Component={Study} />
          <Route path="/Play" Component={Play} />
          <Route path="/Todos" Component={Todos} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </div>
    );
  }
}

export default App;
