import React from "react";
import BookCategory from "./BookCategory/BookCategory";
const bookCategories = ({ items, isVideo, onClick }) => {
	const bookCategoriesView = items.map(item => {
		return <BookCategory key={item.id} {...item} onClick={() => onClick(item.id)} />;
	});
	return (
		<React.Fragment>
			<div className="d-flex align-items-center mb-4">
				<img className="icon icon-md" src="/static/images/icons/janra.png" alt="Жанры" />
				<h5 className="ml-1 mb-0 text-secondary">{!isVideo ? "Жанры" : "Категории"}</h5>
			</div>
			<ul>{bookCategoriesView}</ul>
		</React.Fragment>
	);
};

export default bookCategories;
