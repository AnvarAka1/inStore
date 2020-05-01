import React from "react";
import classes from "./BookCategory.module.scss";
const bookCategory = ({ title, onClick, isActive }) => {
	return (
		<li className={[ classes.BookCategory, isActive && classes.Active ].join(" ")} onClick={onClick}>
			<p>{title}</p>
			{isActive && (
				<div className="ml-1">
					<img src="/static/images/icons/tick.png" className="icon" alt="active" />
				</div>
			)}
		</li>
	);
};

export default bookCategory;
