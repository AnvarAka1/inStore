import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { Logo } from "../";

const navbar = ({ booksCategories, booksCategoryClicked, search, navItems }) => {
	const books = (
		<React.Fragment>
			<img src="/images/icons/book.png" className="icon icon-sm mr-1" alt="Книги" />Книги
		</React.Fragment>
	);
	// const videolessons = (
	// 	<React.Fragment>
	// 		<img src="/images/icons/video.png" className="icon icon-sm mr-1" alt="Видеокурсы" />Видеокурсы
	// 	</React.Fragment>
	// );
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
									<NavDropdown title={books} className="list" id="basic-nav-dropdown">
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
								</Nav>

								{search}
								{navItems}
							</Navbar.Collapse>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default React.memo(navbar);
