import React, { useContext } from "react";
import Head from "next/head";
import Router from "next/router";
import CategoryContext from "../store/CategoryContext";
import { Container } from "react-bootstrap";
import { Navbar, Footer } from "../components";
const Layout = ({ authModalShow, children }) => {
	const categoryContext = useContext(CategoryContext);
	const booksCategoryHandler = id => {
		categoryContext.categoryHandler(id);
		Router.push("/books");
	};
	return (
		<div>
			<Head>
				<title>InStore | Библиотека книг и видеоуроков</title>
			</Head>
			<Navbar
				authModalShow={authModalShow}
				booksCategories={categoryContext.categories}
				booksCategoryClicked={booksCategoryHandler}
			/>
			<main className="pt-4">
				<Container>{children}</Container>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
