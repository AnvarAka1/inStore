import React from "react";
import classes from "./Category.module.scss";
import {Link} from "../../";
import {useTranslation} from "react-i18next";

const category = ({ id, pathname, children, href, icon, isStatic }) => {
	const { i18n } = useTranslation()

	const item = (
		<a>
			<div className="d-flex align-items-center">
				<div className="d-flex align-items-center">
					{isStatic && <img src={icon} alt={children} className="icon icon-sm mr-2" />}
					<p className={`${isStatic && "text-lg"} mr-1`}>{children}</p>
				</div>
				<div className="category__tick">
					<img src="/images/icons/tick.png" className="icon icon-sm" alt="active" />
				</div>
			</div>
		</a>
	);
	return (
		<li className={`${classes.Category} mt-2 list`}>
			{href !== undefined ? (
				<Link href={`/books/categories${href}?l=${i18n.language}`}>{item}</Link>
			) : (
				<Link href={{ pathname: pathname, query: { genre: id, l: i18n.language } }}>
					{item}
				</Link>
			)}
		</li>
	);
};

export default category;
