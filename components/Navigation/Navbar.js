import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Form, Button, Container, Row, Col } from "react-bootstrap";
import { Logo } from "../";

const navbar = ({ booksCategories, booksCategoryClicked, authModalShow }) => {
	const books = (
		<React.Fragment>
			<img src="/static/images/icons/book.png" className="icon" alt="Книги" />Книги
		</React.Fragment>
	);
	const videolessons = (
		<React.Fragment>
			<img src="/static/images/icons/video.png" className="icon" alt="Видеокурсы" />Видеокурсы
		</React.Fragment>
	);
	return (
		<header className={classes.Navbar}>
			<Container>
				<Row>
					<Col>
						<Navbar expand="lg">
							<Link href="/">
								<a>
									<Logo />
								</a>
							</Link>

							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">
									<NavDropdown title={books} id="basic-nav-dropdown">
										{booksCategories.map(cat => {
											return (
												<NavDropdown.Item
													key={cat.id}
													// active={cat.isActive}
													onClick={() => booksCategoryClicked(cat.id)}
												>
													{cat.title}
												</NavDropdown.Item>
											);
										})}
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
									<Nav.Item>
										<Link href="favorite">
											<a>Избранные</a>
										</Link>
									</Nav.Item>
									<Nav.Item>
										<Link href="/cart">
											<a>Корзина</a>
										</Link>
									</Nav.Item>
									<Nav.Item onClick={authModalShow}>Войти</Nav.Item>
								</div>
							</Navbar.Collapse>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default React.memo(navbar);
