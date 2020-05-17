import React from "react";
// import classes from './Link.module.scss';
import Link from "next/link";

import { useRouter } from "next/router";
const CustomLink = ({ children, className, href }) => {
	const router = useRouter();
	let classNames = className || "";
	if (href === router.pathname) {
		classNames = `${className} active`;
	}

	return <Link href={href}>{React.cloneElement(children, { className: classNames })}</Link>;
};

export default CustomLink;
