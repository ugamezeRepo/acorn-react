import { Component } from 'react';
import './App.css';

/*
    [ API 요청 예시]
  
  GET /posts      => post 목록 얻어오기
  GET /posts/1    => post 한 개 얻어오기
  POST /posts     => post 추가하기
  PUT /posts/1    => post 전체 수정하기
  PATCH /posts/1  => post 일부 수정하기
  DELETE /posts/1 => post 삭제하기
*/
class App extends Component {
  state = {
    posts: [],
  };
  // 컴포넌트가 사용할 준비가 되면 호출되는 함수
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    //안드로이드의 onCreate() 메소드에서 하는 준비작업을 비슷하게 여기서 하면된다.
    fetch('http://localhost:4000/posts')
      .then((res) => res.json())
      .then((data) => {
        //data 는 posts 목록이 들어 있는 배열이다 [{},{},...]
        console.log(data);
        this.setState({
          posts: data,
        });
      });
  };

  render = () => (
    <div className="conatiner">
      <h1>인덱스 페이지</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>writer</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.writer}</td>
              <td>
                <button
                  onClick={() => {
                    const title = prompt(item.id + '번 글의 수정할 제목 입력');
                    // 서버에 전송할 정보를 object에 일단 담는다.
                    const obj = {
                      title: title ? title : item.title,
                    };
                    // object에 담긴 내용을 이용해서 json 문자열을 얻어낸다.
                    const jsonStr = JSON.stringify(obj);

                    // 일부 수정이므로 PATCH 요청
                    fetch('http://localhost:4000/posts/' + item.id, {
                      method: 'PATCH',
                      headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                      },
                      body: jsonStr,
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        this.getPosts();
                      })
                      .catch((err) => {
                        console.log('수정 중 에러 발생!', err);
                      });
                  }}
                >
                  수정
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    fetch('http://localhost:4000/posts/' + item.id, {
                      method: 'DELETE',
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        this.getPosts();
                      })
                      .catch((err) => {
                        console.log('삭제 중 에러!', err);
                      });
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        action="http://localhost:4000/posts"
        method="POST"
        onSubmit={(e) => {
          // 폼 전송 막기
          e.preventDefault();

          // 폼에 입력한 내용 ajax 전송
          const url = e.target.action;
          const method = e.target.method;
          const formData = new FormData(e.target);
          const queryString = new URLSearchParams(formData).toString();

          fetch(url, {
            method: method,
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: queryString,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              alert(data.id + '번 post 로 등록 되었습니다');
              this.getPosts();
            })
            .catch((err) => {
              console.log('error 발생!', err);
            });
        }}
      >
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="writer" placeholder="작성자" />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default App;
