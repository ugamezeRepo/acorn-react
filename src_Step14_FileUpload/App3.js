import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // input 요소의 참조값 활용을 위해
  let inputFile = useRef();
  let inputTitle = useRef();

  const [imageData, setImageData] = useState({});
  // preview 이미지
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    // 선택한 파일
    const file = e.target.files[0];

    // 선택한 파일로부터 이미지 로딩
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    // 로딩이 완료됐을 때 호출되는 함수 등록
    reader.onload = (event) => {
      // 읽은 이미지 데이터
      const data = event.target.result;
      console.log(data);
      setPreviewImage(data);
    }
  }

  const previewStyle = {
    'width': '200px',
    'borderRadius': '10px'
  }

  const uploadBtn = () => {
    const formData = new FormData();
    formData.append('title', inputTitle.current.value);
    formData.append('image', inputFile.current.files[0]);

    axios.post('/image/upload2', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <h3>업로드할 이미지 선택</h3>
        
      <input type="text" placeholder="제목" ref={inputTitle} /><br />
      <input type="file" accept="image/*" ref={inputFile} onChange={handleChange} /><br />
      <img src={previewImage} style={previewStyle} alt="미리보기 이미지" /><br />
      <button onClick={uploadBtn}>업로드</button>
    </div>
  );
}

export default App;
