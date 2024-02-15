import { useEffect } from 'react';

/*
  useEffect(() => {
    // component가 활성화될 때 실행되는 영역

    return () => {
      // component가 비활성화될 때 실행되는 영역
    }
  }, [])
*/

function Fortune2({ msg }) {
  useEffect(() => {
    console.log('Fortune2 활성화');

    return () => {
      console.log('Fortune2 비활성화');
    };
  }, []);

  return (
    <p>
      오늘의 운세 : <strong>{msg}</strong>
    </p>
  );
}

export default Fortune2;
