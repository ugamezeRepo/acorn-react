import 'bootstrap/dist/css/bootstrap.css';

// classnames를 import해서 cn으로 사용할 준비
import cn from 'classnames';
import binder from 'classnames/bind';
import Study from './components/Study';

function App2() {
  const styles = {
    aaa: 'btn',
    bbb: 'btn-success',
  };

  const cx = binder.bind(styles);

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
      <button className={cn('btn', 'btn-success')}>버튼1</button>
      <button className={cn('btn', { 'btn-success': true })}>버튼2</button>
      <button className={cn(['btn', 'btn-success'])}>버튼3</button>
      <button className={cx('aaa', 'bbb')}>버튼4</button>

      <Study />
    </div>
  );
}

export default App2;
