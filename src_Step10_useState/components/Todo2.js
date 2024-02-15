/*
  함수형 compoenent가 활성화되는 시점에 원하는 동작이 있다면
  useEffect Hook을 사용한다.

  useEffect(함수, 빈 배열)
  useEffect(() => {
    // component가 활성화되는 시점에 한 번 실행
  }, [])
*/

import { useEffect } from 'react';

function Todo2() {
  useEffect(() => {
    console.log('Todo2 comment가 활성화되었습니다.');
  }, []);

  return (
    <div>
      <h3>할 일 목록</h3>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>내용</th>
            <th>달성</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Todo2;
