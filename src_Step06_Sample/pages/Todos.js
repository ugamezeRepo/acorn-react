// src/pages/Todos

import axios from 'axios';
import { Component } from 'react';

// axios base url 설정
axios.defaults.baseURL = 'http://localhost:4000';

class Todos extends Component {
  state = {
    todos: [],
  };

  // Todo 컴포넌트가 준비되었을 때 최초
  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get('/todos').then((res) => {
      // 서버로부터 응답받은 할일 목록을 이용해 상태값을 변경(UI에 자동 반영)
      this.setState({
        todos: res.data,
      });
    });
  };

  // 체크박스를 체크 혹은 해제했을 때 호출되는 함수
  handleChange = (id, isChecked) => {
    // id는 체크한 아잍메의 id, isChecked는 체크 여부
    const newArray = this.state.todos.map((item) => {
      // 만일 현재 item의 id가 체크한 item의 아이디와 같다면 변경
      item.complete = item.id === id ? isChecked : '';

      return item;
    });

    // 새로운 배열로 변경
    this.setState({
      todos: newArray,
    });

    // 서버에 해당 아이템을 일부수정(PATCH)하도록 요청
    axios
      .patch('/todos/' + id, {
        complete: isChecked,
      })
      .then((res) => {});
  };

  // 체크박스를 체크 혹은 해제했을 때 호출되는 함수
  handleChange2 = (id, isChecked) => {
    // 서버에 해당 아이템을 일부수정(PATCH)하도록 요청
    axios
      .patch('/todos/' + id, {
        complete: isChecked,
      })
      .then((res) => {
        // 수정이 끝나면 서버에서 데이터를 다시 요청해서 UI 업데이트
        this.getTodos();
      });
  };

  render() {
    return (
      <div>
        <h4>할일 목록</h4>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>달성 여부</th>
              <th>달성 여부2</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={(e) => {
                      // e.target.checked에는 체크박스 체크 여부가 들어있다.
                      // tem.id를 찾아 e.target.checked 값을 반영한
                      // 새로운 배열을 얻어내서 상태값을 변경시킨다.
                      this.handleChange(item.id, e.target.checked);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={(e) => {
                      this.handleChange2(item.id, e.target.checked);
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      axios.delete('/todos/' + item.id).then((res) => {
                        this.getTodos();
                      });
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          ref={(refValue) => {
            // input 요소의 참조값을 필드에 저장
            this.inputTodo = refValue;
          }}
          type="text"
          placeholder="할일 입력"
        />
        <button
          onClick={() => {
            axios
              .post('/todos', {
                title: this.inputTodo.value,
                complete: false,
              })
              .then((res) => {
                this.getTodos();
              });
          }}
        >
          추가
        </button>
      </div>
    );
  }
}

export default Todos;
