// src/pages/Home.js

import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export default function Home() {
	const [notice, setNotice] = useState([]);

	useEffect(() => {
		(async () => await axios.get('/notice')
			.then(res => setNotice(res.data))
			.catch(err => console.log(err))
		)()
	}, []);

	return (
		<>
			<h1>인덱스 페이지</h1>
			<h2>공지사항</h2>

			<ListGroup as="ol" numbered>
				{notice.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)}
			</ListGroup>
		</>
	)
}