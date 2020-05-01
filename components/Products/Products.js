import React from "react";
import { Col } from "react-bootstrap";
import Product from "./Product/Product";
const products = ({ items }) => {
	const productsView = items.map(item => {
		return (
			<Col className="mb-4" key={item.id} md={4} sm={3}>
				<Product {...item} />
			</Col>
		);
	});
	return <React.Fragment>{productsView}</React.Fragment>;
};

export default products;
