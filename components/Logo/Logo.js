import React from "react";
import classes from "./Logo.module.scss";
const logo = ({ alt }) => {
	const logo = [ "/static/images/logo/logo.png", "/static/images/logo/logo-alt.png" ];
	return (
		<div className={classes.Logo}>
			<img src={!alt ? logo[0] : logo[1]} alt="logo" className="w-100" />
		</div>
	);
};

export default logo;
