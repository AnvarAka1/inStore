import React from "react";
import { Button } from "react-bootstrap";
const heading = ({ className, children, text, clicked }) => {
	return (
		<div className={className}>
			<h5>{children}</h5>
			<p>{text}</p>
			<Button onClick={clicked}>Открыть весь список</Button>
		</div>
	);
};

export default heading;
