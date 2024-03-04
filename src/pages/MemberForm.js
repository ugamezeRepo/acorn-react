// src/pages/MemberForm.js
import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function MemberForm() {
	// Rout 페이지 이동을 도와주는 함수
	const navigate = useNavigate();
	// 입력한 글 내용 state로 관리
	const [state, setState] = useState({});

	// handleChange()에서 입력한 글 내용 일괄 관리
	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	}

	// 추가 버튼을 눌렀을 때
	const handleSave = () => {
		// state object의 내용 전송
		(async () => await axios.post("/members", state)
			.then(res => {
				if (res.data.isSuccess) {
					alert("추가했습니다.");
					// 글 목록보기로 이동(javascript로 라우터 이동, useNavigate() hook 필요)
					navigate("/members");
				}
			})
			.catch(err => console.log(err))
		)();
	}


	return (
		<>
			<h2>새 회원 입력</h2>

			<Form>
				<Form.Group as={Row} className="mb-3" controlId="name">
					<Form.Label column sm="2">이름</Form.Label>
					<Col sm="10">
						<Form.Control type="text" placeholder="이름" name="name" onChange={handleChange} />
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3" controlId="addr">
					<Form.Label column sm="2">주소</Form.Label>
					<Col sm="10">
						<Form.Control type="text" placeholder="주소" name="addr" onChange={handleChange} />
					</Col>
				</Form.Group>
				<Row>
					<Col sm="2" />
					<Col sm="10">
						<Button variant='primary' onClick={handleSave}>추가</Button>
					</Col>
				</Row>
			</Form>
		</>
	)
}