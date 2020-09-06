import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Logo} from "../";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const navbar = React.forwardRef(
	(props, bookCatsRef) => {
		const {
			booksCategories,
			search,
			navItems,
			isBooksOpen,
			booksToggle
		} = props

		const { t, i18n } = useTranslation()

		const booksTitle = (
			<div className={classes.CategoriesDropdown}>
				<img
					src="/images/icons/book.png"
					className="icon icon-sm mr-1 img"
					alt="Книги"
				/>
				<span className="text-mobile-invisible">
					{t('Categories')}&nbsp;
				</span>
				<img
					src="/images/icons/caret.png"
					alt="expand"
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
										<ul>
											{booksCategories.map(cat => {
												return (
													<li key={cat.id} className={classes.CategoryItem}>
														<Link href={`/books/categories${cat.link}?l=${i18n.language}`}>
															<a onClick={() => booksToggle(false)}>{t(cat.title)}</a>
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
