import React from "react";
import { Button } from "react-bootstrap";
import classes from "./ProductDescription.module.scss";
const productDescription = ({
	publish_year,
	title,
	author,
	book_type,
	description,
	price,
	currentPrice,
	isInCart,
	cartClicked
}) => {
	const bookTypes = [ "Аудиокнига", "Печатное издание", "Электронная книга" ];
	return (
		<div className={classes.ProductDescription}>
			<p>{publish_year}</p>
			<h2>{title}</h2>
			<div className="d-flex justify-content-start align-items-center">
				<h4 className="text-secondary mb-0">{author}</h4>
				<div>
					<Button>
						<div className="d-flex align-items-center">
							<img src="/images/icons/star.png" className="icon mr-1" />Избранное
						</div>
					</Button>
				</div>
				<div>{bookTypes[+book_type]}</div>
			</div>
			<p className="text-md">
				<strong>Аннотация к книге "{title}"</strong>
			</p>
			<p className="text-md">
				{/* should be openable */}
				{description}
			</p>
			<div className="d-flex justify-content-between align-items-end">
				<h2>{currentPrice} сум</h2>
				<div>
					<div>
						<p className="text-crossed">{price} сум</p>
						{/* скидка */}
					</div>
					{/* Читать фрагмент */}
				</div>
			</div>
			<Button onClick={cartClicked}>{isInCart ? "Удалить из корзины" : "Добавить в корзину"}</Button>
		</div>
	);
};

export default productDescription;
