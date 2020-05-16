import React from "react";
import { Stars } from "../../";
const comment = ({ id, user, rate, text, created_at }) => {
	return (
		<li>
			<div className="d-flex align-items-end">
				<h4 className="mb-0">{user.fio}</h4>
				<Stars rate={rate} isBig />
			</div>
			<p>{text}</p>
			<p className="text-small">{created_at}</p>
		</li>
	);
};

export default comment;
