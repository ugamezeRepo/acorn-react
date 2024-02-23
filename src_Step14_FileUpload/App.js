import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let inputFile = useRef();
  const [imageData, setImageData] = useState({});

  const uploadBtn = () => {
    console.log(inputFile.current);
    // FormData 객체를 생성해서
    const formData = new FormData();
    // 선택한 파일을 image라는 파라미터명으로 담는다.
    formData.append('image', inputFile.current.files[0]);
    formData.append('title', '어쩌구 저쩌구');
    // axios를 이용해서 multipart 요청을 보낸다.
    axios
      .post('/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        setImageData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <h3>업로드할 이미지 선택</h3>
        
      <input type="file" accept="image/*" ref={inputFile} />
      <button onClick={uploadBtn}>업로드</button>
      {imageData.orgFileName && <p>업로드된 파일명: <strong>{imageData.orgFileName}</strong></p>}
      {imageData.saveFileName && <img src={`/upload/images/${imageData.saveFileName}`} alt="" />}
    </div>
  );
}

export default App;
