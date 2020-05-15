import React from "react";
// import classes from './Link.module.scss';
import Link from "next/link";

import { useRouter } from "next/router";
const CustomLink = ({ children, className, href, as }) => {
	const router = useRouter();
	const baseUrl = as.split("?")[0];
	let routerBaseUrl = router.asPath.split("?")[0];

	let classNames = className || "";
	let hasSuchQuery = false;
	if (href.query) {
		for (let key in href.query) {
			if (href.query[key] === router.query[key]) {
				hasSuchQuery = true;
			}
		}
	} else {
		// console.log(as + " " + href + baseUrl + " " + routerBaseUrl + " query = " + href.query);
		if (baseUrl === routerBaseUrl) {
			classNames = `${className} active`;
		}
	}
	// if base url is the same as "as", then highlight
	// if query url is the same as "as", then highlight
	// console.log(href.query);
	// console.log(router);
	// const currentRoute = as ? as : href;
	// const route = as ? router.asPath : router.pathname;
	// if (route === currentRoute) {
	// 	classNames = `${className} active`;
	// }
	return (
		<Link href={href} as={as}>
			{React.cloneElement(children, { className: classNames })}
		</Link>
	);
};

export default CustomLink;
