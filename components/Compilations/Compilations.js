import React from "react";
import Compilation from "./Compilation/Compilation";
import { Col } from "react-bootstrap";
const compilations = ({ items, onClick }) => {
	const compilationsView = items.map(item => {
		return (
			<Col md={4} sm={6}>
				<Compilation key={item.id} {...item} />
			</Col>
		);
	});
	return <React.Fragment>{compilationsView}</React.Fragment>;
};

export default compilations;
