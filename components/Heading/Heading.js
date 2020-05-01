import React from "react";
import classes from "./Heading.module.scss";
import { Button } from "react-bootstrap";
const heading = ({ className, children, text, clicked }) => {
	return (
		<div className={[ className, classes.Heading ].join(" ")}>
			<h3>{children}</h3>
			<h5 className="mb-3 text-normal">{text}</h5>
			<Button onClick={clicked}>Открыть весь список</Button>
		</div>
	);
};

export default heading;
