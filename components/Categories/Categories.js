import React from "react";
import Category from "./Category/Category";
const categories = ({ items, isVideo, onClick, isStatic }) => {
	const categoriesView = items.map(item => {
		return <Category key={item.id} {...item} onClick={() => onClick(item.id)} isStatic={isStatic} />;
	});
	return (
		<React.Fragment>
			{!isStatic && (
				<div className="d-flex align-items-center mb-4">
					<img className="icon icon-md" src="/static/images/icons/janra.png" alt="Жанры" />
					<h5 className="ml-1 mb-0 text-secondary">{!isVideo ? "Жанры" : "Категории"}</h5>
				</div>
			)}
			<ul>{categoriesView}</ul>
			<hr className="mt-4 pb-2" />
		</React.Fragment>
	);
};

export default categories;
