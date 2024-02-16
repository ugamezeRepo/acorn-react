import { useState } from 'react';
import myCss from './css/custom_Study.module.css';
import binder from 'classnames/bind';

const cx = binder.bind(myCss);

export default function Study() {
  const [isBold, setBold] = useState(false);

  return (
    <div>
      <h3>Study Component</h3>
      <p className={myCss['bg-yellow']}>열심히 공부해요~</p>
      <input
        type="checkbox"
        checked={isBold}
        onChange={(e) => {
          setBold(e.target.checked);
        }}
      />
      <p className={cx({ 'font-bold': isBold })}>클래스 추가 제거</p>
    </div>
  );
}
