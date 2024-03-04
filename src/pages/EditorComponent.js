// src/pages/EditorComponent2.js

import { useEffect, useRef, useState } from "react"
import { initEditor } from "../editor/SmartEditor";

export default function EditorComponent() {
    // 입력한 내용을 어덩오기 위한 useRef()
    const inputTitle = useRef();
    const inputContent = useRef();
    // SmartEditor에 작성한 내용을 textarea의 value로 넣어줄 때 필요한 함수 관리
    const [editorTool, setEditorTool] = useState([]);

    useEffect(() => {
        // initEditor()를 호출하면서 SmartEditor로 변환할 textarea의 id 전달 시
        // textarea가 SmartEditor로 변경되며 editorTool 객체 리턴
        setEditorTool(initEditor("content"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // editorTool을 이용해 SmartEditor에 입력한 내용을 textarea의 value값으로 변환
        editorTool.exec();
        // 폼 요소에 입력한 내용 읽어오기
        const title = inputTitle.current.value;
        const content = inputContent.current.value;

        alert(content);
    }

    return (
        <>
            <h3>SmartEditor 테스트</h3>

            <form>
                <div>
                    <label htmlFor="title">제목</label>
                    <input ref={inputTitle} type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea ref={inputContent} name="content" id="content" rows="10" />
                </div>
                <button type="submit" onClick={handleSubmit}>저장</button>
            </form>
        </>
    )
}