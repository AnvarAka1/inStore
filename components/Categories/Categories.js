import React from "react";
import Category from "./Category/Category";
import {useTranslation} from "react-i18next";

const categories = ({ items, isStatic, lang, pathname }) => {
	const { t } = useTranslation()


	return (
		<React.Fragment>
			{!isStatic && (
				<div className="d-flex align-items-center mb-4">
					<img className="icon icon-md" src="/images/icons/janra.png" alt="Жанры" />
					<h5 className="ml-1 mb-0 text-secondary">{t('Genres')}</h5>
				</div>
			)}
			<ul>
				{items.map(item => (
					<Category
						lang={lang}
						key={item.id}
						icon={item.icon}
						id={item.id}
						href={item.link}
						pathname={pathname}
						isStatic={isStatic}
					>
						{item.title}
					</Category>
				))}
			</ul>
			<hr className="mt-4 pb-2" />
		</React.Fragment>
	);
};

export default categories;
