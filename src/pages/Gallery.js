// src/pages/Gallery.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Modal, Pagination, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Gallery() {
	const [formShow, setFormShow] = useState(false);
	const [pageInfo, setPageInfo] = useState({
		list: []
	});
	const [pageArray, setPageArray] = useState([]);
	// "/gallery?pageNum=x" 에서 pageNum 을 추출하기 위한 Hook   
	const [params, setParams] = useSearchParams({ pageNum: 1 })

	const createArray = (start, end) => {
		const result = [];
		while (start <= end) {
			result.push(start++);
		}
		return result;
	}

	// 갤러리 목록을 읽어오는 함수
	const refresh = async (pageNum) => {
		const info = await axios.get(`/gallery?pageNum=${pageNum}`);
		await setPageInfo(info.data);
		const result = await createArray(info.data.startPageNum, info.data.endPageNum);
		await setPageArray(result);
	}

	useEffect(() => {
		// query 파라미터 값을 읽어와 본다
		let pageNum = params.get("pageNum")
		// 만일 존재 하지 않는다면 1 페이지로 설정
		if (pageNum == null) pageNum = 1
		// 해당 페이지의 내용을 원격지 서버로 부터 받아온다 
		refresh(pageNum)
	}, [params]) // params 가 변경되었을때도 다시 받아오도록 한다 

	return (
		<>
			<h3>갤러리</h3>
			<button onClick={() => {
				setFormShow(true);
			}}>업로드</button>

			<Row>
				{pageInfo.list.map((item) => (
					<Col sm={6} md={3} key={item.num}>
						<Card>
							<Card.Img variant="top" src={`upload/images/${item.saveFileName}`} />
							<Card.Body>
								<Card.Text>{item.caption}</Card.Text>
								<Card.Text>writer: <strong>{item.writer}</strong></Card.Text>
								<Button>자세히 보기</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>

			<Pagination>
				<Pagination.Item
					disabled={pageArray[0] === 1}
					onClick={() => {
						//setParmas() 함수를 이용해서 query 파라미터를 변경한다(history 에 누적이 됨)
						setParams({ pageNum: pageInfo.startPageNum - 1 })
					}}
				>&laquo;</Pagination.Item>
				{pageArray.map((item) => (
					<Pagination.Item onClick={() =>
						setParams({ pageNum: item })
					} key={item}>{item}</Pagination.Item>
				))}
				<Pagination.Item
					disabled={pageInfo.endPageNum >= pageInfo.totalPageCount}
					onClick={() => {
						setParams({ pageNum: pageInfo.endPageNum + 1 })
					}}
				>&raquo;</Pagination.Item>
			</Pagination>

			<UploadFormModal show={formShow} setShow={setFormShow} />
		</>
	)
}

function UploadFormModal(props) {
	//입력한 설명 
	const [caption, setCaption] = useState("");
	//선택한 이미지 파일 
	const [image, setImage] = useState(null);
	//선택한 이미지 preview 관련 state
	const [previewImage, setPreviewImage] = useState(null);

	//이미지를 선택했을때 실행되는 함수
	const handleChange = (e) => {
		//선택한 파일 얻어내기
		const file = e.target.files[0];
		console.log(file);
		setImage(file);
		//선택한 파일로 부터 이미지 로딩하기
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (event) => {
			//읽은 파일 데이터 얻어내기 
			const data = event.target.result;
			setPreviewImage(data);
		};
	}

	const handleUpload = () => {
		//FormData 에  입력한 caption 과 image 파일 정보를 담아서
		const formData = new FormData();
		formData.append("caption", caption);
		formData.append("image", image);
		axios.post("/gallery", formData, { headers: { "Content-Type": "multipart/form-data" } })
			.then(res => {
				console.log(res.data);
				// 폼 숨기기
				props.setShow(false);
				// 입력하거나 선택된 상태값 초기화
				setPreviewImage(null);
				setCaption(null);
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			onHide={() => { props.setShow(false) }}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					이미지 업로드 양식
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<FloatingLabel controlId="floatingInput" label="이미지 설명" className="mb-3">
					<Form.Control onChange={(e) => setCaption(e.target.value)} name="caption" type="text" placeholder="이미지 설명" />
				</FloatingLabel>
				<FloatingLabel controlId="floatingPassword" label="이미지 선택" className="mb-3">
					<Form.Control onChange={handleChange} name="image" type="file" accept="image/*" placeholder="이미지 선택" />
				</FloatingLabel>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={previewImage} />
					<Card.Body>
						<Card.Text>{caption}</Card.Text>
					</Card.Body>
				</Card>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={handleUpload}>업로드</Button>
			</Modal.Footer>
		</Modal>
	);
}