import React from "react";
import classes from "./Category.module.scss";
const category = ({ title, onClick, isActive, imgs, isStatic }) => {
	return (
		<li className={[ classes.Category, isActive && classes.Active ].join(" ")} onClick={onClick}>
			<div className="d-flex align-items-center">
				{isStatic && <img src={imgs[isActive ? 1 : 0]} alt={title} className="icon icon-sm mr-1" />}
				<p className={`${isStatic && classes.Big}`}>{title}</p>
			</div>
			{isActive && (
				<div className="ml-1">
					<img src="/static/images/icons/tick.png" className="icon icon-sm" alt="active" />
				</div>
			)}
		</li>
	);
};

export default category;
