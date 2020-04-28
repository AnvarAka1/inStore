import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Footer } from "../components";
const layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main>
				<Container>{children}</Container>
			</main>
			<Footer />
		</div>
	);
};

export default layout;
