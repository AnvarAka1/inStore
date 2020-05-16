import React from "react";
import classes from "./Category.module.scss";
// import {useRouter} from 'next/router';
import Link from "next/link";
const category = ({ id, children, href, icon, isStatic }) => {
	return (
		<li className={`${classes.Category} mt-2 list`}>
			<Link
				href={`/books/categories${href !== undefined ? href : "/" + id.toString()}`}
				// href={{ pathname: "/books/categories/[id]", query: !isStatic && { janra: id } }}
				// as={href}
				// as={isStatic ? `/books/categories/${id}` : `${id}`}
			>
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
			</Link>
		</li>
	);
};

export default category;
