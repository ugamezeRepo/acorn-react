// src/pages/Home.js

import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
	const [notice, setNotice] = useState([]);
	const isLogin = useSelector(state => state.isLogin);

	useEffect(() => {
		console.log("Home.js의 uesEffect()에 전달한 함수 호출");
		if (!isLogin) return;
		axios.get('/notice')
			.then(res => setNotice(res.data))
			.catch(err => console.log(err));
	}, [isLogin]);

	return (
		<>
			<h1>인덱스 페이지</h1>
			<p>로그인 여부: {JSON.stringify(isLogin)}</p>

			<ul>
				<li><Link to="/editor">Smart Editor 테스트</Link></li>
				<li><Link to="/book">Query Param 테스트</Link></li>
			</ul>

			<h2>공지사항</h2>

			<ListGroup as="ol" numbered>
				{notice.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)}
			</ListGroup>
		</>
	)
}