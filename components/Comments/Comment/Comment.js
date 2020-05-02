import React from "react";
import { Stars } from "../../";
const comment = ({ id, name, rate, text, date }) => {
	return (
		<li>
			<div className="d-flex align-items-end">
				<h4 className="mb-0">{name}</h4>
				<Stars rate={rate} isBig />
			</div>
			<p>{text}</p>
			<p className="text-small">{date}</p>
		</li>
	);
};

export default comment;
