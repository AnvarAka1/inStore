import React from "react";
import classes from "./Compilation.module.scss";
const compilation = ({ className, text, img }) => {
	return (
		<div className={`${className} ${classes.Compilation}`}>
			<img src={img} alt={text} />
			<div>
				<h3>{text}</h3>
			</div>
		</div>
	);
};

export default compilation;
