import React from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";

const newHeader = ({ children, href }) => {
	const { t } = useTranslation()

	return (
		<Link href={href}>
			<a>
				<div className="d-flex align-items-end pb-3">
					<h3 className="mb-0 mr-3 text-normal text-secondary">
						{t('New')} {children}
					</h3>
				</div>
			</a>
		</Link>
	);
};

export default newHeader;
