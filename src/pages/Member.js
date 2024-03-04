// src/pages/Member.js

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Button, Table } from "react-bootstrap";

export default function Member() {
	const [members, setMembers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => await axios.get("/members")
			.then(res => { setMembers(res.data); })
			.catch(err => console.log(err))
		)();
	}, []);

	const refresh = () => {
		(async () => await axios.get("/members")
			// 응답된 데이터를 이용해 state 수정
			.then(res => setMembers(res.data))
			.catch(err => console.log(err))
		)();
	}

	const handleDelete = (num) => {
		(async () => await axios.delete(`/members/${num}`)
			.then(() => refresh())
			.catch(err => console.log(err))
		)();
	}

	return (
		<>
			<h1>회원 목록</h1>

			<Link to="/members/new">회원 추가</Link>

			<Table bordered hover>
				<thead>
					<tr>
						<th>번호</th>
						<th>이름</th>
						<th>주소</th>
						<th>수정</th>
						<th>삭제</th>
					</tr>
				</thead>
				<tbody>
					{members.map(item => (
						<tr key={item.num}>
							<td>{item.num}</td>
							<td>{item.name}</td>
							<td>{item.addr}</td>
							<td><Button variant="warning" size="sm" onClick={() => navigate(`/members/${item.num}/edit`)}>수정</Button></td>
							<td><Button variant="danger" size="sm" onClick={() => handleDelete(item.num)}>삭제</Button></td>
						</tr>))}
				</tbody>
			</Table>
		</>
	)
}