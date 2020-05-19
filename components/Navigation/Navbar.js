import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { Logo } from "../";

const navbar = React.forwardRef(({ booksCategories, search, navItems, isBooksOpen, booksToggle }, bookCatsRef) => {
	const booksTitle = (
		<React.Fragment>
			<img src="/images/icons/book.png" className="icon icon-sm mr-1" alt="Книги" />Книги{" "}
			<img
				src="/images/icons/caret.png"
				className={`icon ${classes.Rotatable} ${isBooksOpen && classes.Rotate}`}
			/>
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
								<Nav className="mr-auto list ml-5 position-relative">
									<a
										role="button"
										style={{ cursor: "pointer" }}
										onClick={() => booksToggle(!isBooksOpen)}
										className={classes.ButtonForToggle}
										ref={bookCatsRef}
									>
										{booksTitle}
									</a>
									{isBooksOpen && (
										<ul className={classes.Toggle}>
											{booksCategories.map(cat => {
												return (
													<li key={cat.id} className={classes.CategoryItem}>
														<Link href={`/books/categories${cat.link}`}>
															<a onClick={() => booksToggle(false)}>{cat.title}</a>
														</Link>
													</li>
												);
											})}
										</ul>
									)}
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
});
export default React.memo(navbar);
