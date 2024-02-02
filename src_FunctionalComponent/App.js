// App.css 적용 (내부 css)
import './App.css';

// 함수형 Compoenent
function App() {
  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
    </div>
  );
}

// 외부에서 App.js를 import하면 App함수를 사용할 수 있다. (index.js)
export default App;
