import React from "react";
import Link from "next/link";
const popularHeader = ({ children, link }) => {
	return (
		<Link href={link}>
			<a>
				<div className="d-flex align-items-end pb-3">
					<h3 className="mb-0 mr-3 text-normal text-secondary">Популярные {children}</h3>
					<p className="mb-0 text-small text-secondary">Перейти в список »</p>
				</div>
			</a>
		</Link>
	);
};

export default popularHeader;
