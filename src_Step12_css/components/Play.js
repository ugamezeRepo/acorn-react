/*
  특정 component에만 적용될 외부 css파일을 만들 때, xxx.module.css 형태로 생성
  import된 myCss는 object 구조
  - object 구조
  {className: "변경된 className", ...}
*/
import myCss from './css/custom_play.module.css';

export default function Play() {
  console.log(myCss);
  return (
    <div>
      <h3>Play Component</h3>
      <p className={myCss.green}>제대로 놀아보자~</p>
      <p className={myCss['big-font']}>어쩌구...</p>
      <p className={myCss.green + ' ' + myCss['big-font']}>
        두 개의 클래스를 모두 적용?
      </p>
      <p className={`${myCss.green} ${myCss['big-font']}`}>
        두 개의 클래스를 모두 적용?
      </p>
    </div>
  );
}
