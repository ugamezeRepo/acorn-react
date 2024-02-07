// components/ListComponent.js

import { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          /* 
            jsx 객체가 여러 개 들어있는 배열을 렌터링할 떄, 각각의 jsx 객체를
            유일하게 식별할 수 있는 겹치지 않는 pk값을 지정해야한다.
            DB에서 읽어온 데이터라면 DB에 있는 primary key값을 넣어주면 되고
            그렇지 않다면 겹치지 않는 숫자를 얻어내서 직접 넣어주어야한다.
          */
          <li key={index}>
            {item}
            <button
              onClick={() => {
                // 삭제 버튼을 눌렀을 때 onDelete()를 호출하면서 index 전달
                this.props.onDelete(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
