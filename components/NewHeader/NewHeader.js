import React from "react";
import Link from "next/link";
const newHeader = ({ children, href, lang }) => {
	const content = {
		titles: ["Новые", "New", "Yangi"]
	};
	return (
		<Link href={href}>
			<a>
				<div className="d-flex align-items-end pb-3">
					<h3 className="mb-0 mr-3 text-normal text-secondary">
						{content.titles[lang]} {children}
					</h3>
				</div>
			</a>
		</Link>
	);
};

export default newHeader;
