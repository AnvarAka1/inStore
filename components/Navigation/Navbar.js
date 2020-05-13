import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import NavItems from "./NavItems/NavItems";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { Logo } from "../";

const navbar = ({ booksCategories, booksCategoryClicked, authModalShow, search }) => {
	const books = (
		<React.Fragment>
			<img src="/images/icons/book.png" className="icon icon-sm mr-1" alt="Книги" />Книги
		</React.Fragment>
	);
	const videolessons = (
		<React.Fragment>
			<img src="/images/icons/video.png" className="icon icon-sm mr-1" alt="Видеокурсы" />Видеокурсы
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
								<Nav className="mr-auto ml-5">
									<NavDropdown title={books} id="basic-nav-dropdown">
										{booksCategories.map(cat => {
											return (
												<NavDropdown.Item
													key={cat.id}
													onClick={() => booksCategoryClicked(cat.id)}
												>
													{cat.title}
												</NavDropdown.Item>
											);
										})}
									</NavDropdown>
									{/* <NavDropdown title={videolessons} id="basic-nav-dropdown">
										<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
									</NavDropdown> */}
								</Nav>

								{search}
								<NavItems authModalShow={authModalShow} />
							</Navbar.Collapse>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default React.memo(navbar);
