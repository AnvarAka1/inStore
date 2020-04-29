import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Footer } from "../components";
const layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>InStore | Библиотека книг и видеоуроков</title>
			</Head>
			<Navbar />
			<main>
				<Container>{children}</Container>
			</main>
			<Footer />
		</div>
	);
};

export default layout;
