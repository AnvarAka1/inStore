import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Speaker.module.scss";
import Link from "next/link";
const speaker = ({ name, role, quote, onClick }) => {
	return (
		<div className={classes.Speaker}>
			<h3>{name}</h3>
			<p>{role}</p>
			<p className={classes.Quote}>{quote}</p>
			<h3 className="text-normal mt-auto">Стань нашим спикером</h3>
			<Button onClick={onClick}>Отправить заявку</Button>
		</div>
	);
};

export default speaker;
