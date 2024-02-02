// App.css 적용
import './App.css';

function App() {
  const myName = 'Udada';

  // click event 함수 정의
  const clicked = () => {
    alert('으앙! 눌러졌다...');
  };

  // 요소에 적용할 inline-css를 object로 정의하여 적용이 가능하다.
  const boxStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid red',
    backgroundColor: 'yellow',
    marginTop: '20px',
  };

  return (
    <div className="container">
      <h1>React js</h1>
      <p>
        내 이름은 <strong>{myName}</strong>
      </p>
      <button
        onClick={() => {
          alert('눌러버리다니..!!');
        }}
      >
        눌러보기
      </button>
      {/* 만들어 놓은 함수 사용 */}
      <button onClick={clicked}>눌러보기2</button>
      <div style={boxStyle}></div>
    </div>
  );
}

export default App;
