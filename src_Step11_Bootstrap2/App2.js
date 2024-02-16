import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    console.log('저장합니다.');
    setShow(false);
  };

  return (
    <div className="container">
      <h1>인덱스 페이지</h1>
      <Button
        onClick={() => {
          handleShow();
        }}
      >
        모달 띄우기
      </Button>
      <MyModal
        show={show}
        onHide={() => handleClose()}
        onSave={() => handleSave()}
      ></MyModal>
    </div>
  );
}

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={props.onSave}>
          저장하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App2;
