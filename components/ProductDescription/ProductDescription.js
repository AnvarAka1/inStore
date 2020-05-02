import React from "react";
import classes from "./ProductDescription.module.scss";
const productDescription = ({ date, title, author, type, description, price, currentPrice }) => {
	return (
		<div className={classes.ProductDescription}>
			<p>{date}</p>
			<h2>{title}</h2>
			<div className="d-flex justify-content-between align-items-center">
				<h3>{author}</h3>
				<div>
					{/* Избранное */}
					{/* Печатное издание */}
					{type}
				</div>
			</div>
			<h5>Аннотация к книге "{title}"</h5>
			<p>
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
			{/* Кнопка "в корзину" */}
		</div>
	);
};

export default productDescription;
