import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Pagination,
  Row,
} from 'react-bootstrap';
// npm install bootstap을 했으므로 import 사용
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function createArray(start, end) {
  const result = [];
  while (start <= end) {
    result.push(start++);
  }
  return result;
}

function App() {
  // 출력할 페이지 번호가 있는 배열
  const pageNums = createArray(1, 8);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(3);

  function pageClickHandler(num) {
    setCurrentPage(num);
  }

  return (
    <Container>
      <h1>인덱스 페이지</h1>
      <Row>
        <Col>칼럼1</Col>
        <Col>칼럼2</Col>
        <Col>칼럼3</Col>
      </Row>

      <Button variant="primary">Primary</Button>
      <Button variant="success" size="lg">
        Success lg
      </Button>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active={true}>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next />
      </Pagination>

      <Pagination>
        <Pagination.Prev />
        {pageNums.map((num) => (
          <Pagination.Item
            key={num}
            active={num === currentPage}
            onClick={() => {
              pageClickHandler(num);
            }}
          >
            {num}
          </Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}

export default App;
