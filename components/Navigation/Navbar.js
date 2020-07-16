import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Logo } from "../";
import clsx from "clsx";

const navbar = React.forwardRef(
	({ booksCategories, search, navItems, isBooksOpen, booksToggle, lang = 0, navItemsMobile }, bookCatsRef) => {
		const content = {
			books: ["Книги", "Books", "Kitoblar"]
		};
		const booksTitle = (
			<div className={classes.CategoriesDropdown}>
				<img src="/images/icons/book.png" className="icon icon-sm mr-1 img" alt="Книги" />
				<span className="text-mobile-invisible">{content.books[lang]} </span>
				<img
					src="/images/icons/caret.png"
					className={clsx(
						"icon img",
						classes.Rotatable, {
						[classes.Rotate]: isBooksOpen
					})}
				/>
			</div>
		);

		return (
			<header className={classes.Navbar}>
				<Container fluid className={classes.Container}>
					<Row>
						<Col>
							<Navbar expand="lg">
								<Link href="/">
									<a>
										<Logo desktop />
										<Logo mobile />
									</a>
								</Link>


								<Nav className={`list position-relative d-flex ${classes.Categories}`}>
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
														<Link href={`/books/categories${cat.link}?l=${lang}`}>
															<a onClick={() => booksToggle(false)}>{cat.titles[lang]}</a>
														</Link>
													</li>
												);
											})}
										</ul>
									)}
								</Nav>
								{search}
								{navItems}
							</Navbar>
						</Col>
					</Row>
				</Container>
			</header>
		);
	}
);
export default React.memo(navbar);
