import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => {
            setShow(e.target.checked);
          }}
        />
      </label>
      {show && <button className="btn btn-primary">버튼</button>}
      <Button variant="success">버튼</Button>
      {show && (
        <Alert variant="success">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      )}
    </div>
  );
}

export default App;
