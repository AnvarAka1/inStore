import React from "react";
import Link from "next/link";
const newHeader = ({ children, href, lang }) => {
	const content = {
		titles: [ "Новые", "New", "Yangi" ],
		texts: [ "Перейти в список", "Proceed to the list", "Uzb" ]
	};
	return (
		<Link href={href}>
			<a>
				<div className="d-flex align-items-end pb-3">
					<h3 className="mb-0 mr-3 text-normal text-secondary">
						{content.titles[lang]} {children}
					</h3>
					<p className="mb-0 text-small text-secondary">{content.texts[lang]} »</p>
				</div>
			</a>
		</Link>
	);
};

export default newHeader;
