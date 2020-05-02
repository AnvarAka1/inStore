import React from "react";
import classes from "./ProductDetails.module.scss";
import { Stars } from "../../components";
const productDetails = ({ img, title, rate, details, social }) => {
	const firstColumn = [
		"ID товара: ",
		"ISBN: ",
		"Страниц: ",
		"Оформление: ",
		"Иллюстрации: ",
		"Масса: ",
		"Размеры: ",
		"Подробнее: "
	];
	const rows = [];
	// ATTENTION. The number of columns in both arrays must be the same!
	// ELSE it will not display all rows
	let j = 0;
	for (const i in details) {
		if (j < firstColumn.length) rows.push({ first: firstColumn[j], second: details[i] });
		j++;
	}
	return (
		<div className={classes.ProductDetails}>
			<div>
				<img src={img} alt={title} />
			</div>
			<div className="d-flex align-items-center">
				<h3 className="mb-0 mr-3">Рейтинг книги</h3>
				<Stars rate={rate} isBig />
			</div>

			<table>
				<thead />
				<tbody>
					{rows.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.first}</td>
								<td>{row.second}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* Social */}
		</div>
	);
};

export default productDetails;
