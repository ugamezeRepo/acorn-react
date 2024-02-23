import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App2() {
  const URL = 'http://localhost:9001/boot11';

  let inputFile = useRef();
  const [fileData, setFileData] = useState({
    orgFileName: '',
    saveFileName: '',
    fileSize: '',
    url: '',
  });

  const uploadBtn = () => {
    console.log(inputFile.current);
    // FormData 객체를 생성해서
    const formData = new FormData();
    // 선택한 파일을 myFile라는 파라미터명으로 담는다.
    formData.append('myFile', inputFile.current.files[0]);
    formData.append('title', '어쩌구 저쩌구');
    // axios를 이용해서 multipart 요청을 보낸다.
    axios
      .post('/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        const orgFileName = res.data.orgFileName;
        const saveFileName = res.data.saveFileName;
        const fileSize = res.data.fileSize;
        const url = `
          ${URL}/file/download?\
          orgFileName=${orgFileName}&\
          saveFileName=${saveFileName}&\
          fileSize=${fileSize}
        `.trim();
        setFileData({
          orgFileName: orgFileName,
          saveFileName: saveFileName,
          fileSize: fileSize,
          url: url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>

      <h3>업로드할 파일 선택</h3>
        
      <input type="file" ref={inputFile} />
      <button onClick={uploadBtn}>업로드</button>
      {fileData.fileSize && 
        <div>
          <p>원본 파일명 : <strong>{fileData.orgFileName}</strong></p>
          <p>저장 파일명 : <strong>{fileData.saveFileName}</strong></p>
          <p>파일 크기 : <strong>{fileData.fileSize}</strong> byte</p>
          <p>Url: <strong>{fileData.url}</strong></p>
          <a href={fileData.url}>다운로드</a>
        </div> 
      }
    </div>
  );
}

export default App2;
