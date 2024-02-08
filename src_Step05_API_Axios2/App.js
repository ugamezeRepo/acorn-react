import { Component } from 'react';
import './App.css';
import Todo from './components/TodoComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todo />
      </div>
    );
  }
}

export default App;
