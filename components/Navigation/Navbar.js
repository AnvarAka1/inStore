import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Logo } from "../";

const navbar = () => {
	const books = (
		<React.Fragment>
			<img src="/static/images/icons/book.png" />Книги
		</React.Fragment>
	);
	const videolessons = (
		<React.Fragment>
			<img src="/static/images/icons/video.png" />Видеокурсы
		</React.Fragment>
	);
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title={books} id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title={videolessons} id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline className="ml-auto">
						<Form.Control type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
					<div className="d-flex justify-content-between align-items-center">
						<Nav.Item>Избранные</Nav.Item>
						<Nav.Item>Корзина</Nav.Item>
						<Nav.Item>Войти</Nav.Item>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default navbar;
