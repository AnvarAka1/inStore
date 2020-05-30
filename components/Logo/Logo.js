import React from "react";
import classes from "./Logo.module.scss";
const logo = ({ mobile, desktop }) => {
	const logo = ["/images/logo/logo.png", "/images/logo/logo-mobile.png"];
	return (
		<div className={`${classes.Logo} ${mobile && classes.Mobile} ${desktop && classes.Desktop}`}>
			<img src={!mobile ? logo[0] : logo[1]} alt="logo" className="w-100" />
		</div>
	);
};

export default logo;
