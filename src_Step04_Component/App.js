// App.css 적용 (내부 css)
import { Component } from 'react';
import './App.css';
import Child from './components/ChildComponent';
import Contact from './components/ContactComponent';
import MyName from './components/MyNameComponent';

// 클래스형 Compoenent
class App extends Component {
  // render() 함수에서 리턴하는 jsx로 화면이 구성된다.
  render() {
    const name = '원숭이';

    return (
      <div>
        <h1>인덱스 페이지</h1>
        <Child />
        <Child />
        <Child />
        <Contact />

        {/* MyName Component에 name이라는 property로 string type "김구라" 전달 */}
        <MyName name={'김구라'}></MyName>
        <MyName name={'해골'} />
        <MyName name={name} />
        <MyName
          name={'덩어리'}
          action={() => {
            alert('자식 Compoenent의 버튼이 클릭되었습니다.');
          }}
        ></MyName>
      </div>
    );
  }
}

// 외부에서 App.js를 import하면 App함수를 사용할 수 있다. (index.js)
export default App;
