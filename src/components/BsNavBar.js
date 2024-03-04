// src/components/BsNavBar.js

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function BsNavBar() {
	// 로그인된 사용자명이 store에 있는 지 읽어와본다.
	const userName = useSelector(state => state.userName);
	// redux store에 액션을 보낼 dispatch
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		delete localStorage.token;
		dispatch({ type: "UPDATE_USER", payload: null });
		dispatch({ type: "SET_LOGIN", payload: false });
		navigate("/");
	}

	const handleSignin = () => {
	}

	return (
		<Navbar expand="md" className="bg-warning mb-2">
			<Container>
				<Navbar.Brand as={NavLink} to={"/"}>Acorn</Navbar.Brand>
				<Navbar.Toggle aria-controls="one" />
				<Navbar.Collapse id="one">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/members">Member</Nav.Link>
						<Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
					</Nav>

					{/* store에 userName이 존재할 경우 userName 출력 혹은 로그인 버튼 출력 */}
					{userName
						? <>
							<Nav>
								<Nav.Link as={NavLink}>{userName}</Nav.Link>
								<span className="navbar-text">Signed in</span>
							</Nav>
							<Button className="ms-2" variant="outline-primary" onClick={handleLogout}>Logout</Button>
						</>
						: <Button variant="outline-success" onClick={handleSignin}>Sign in</Button>
					}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}