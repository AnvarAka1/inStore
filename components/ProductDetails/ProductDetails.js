import React from "react";
import classes from "./ProductDetails.module.scss";
import { Stars } from "../../components";
const productDetails = props => {
	const rows = [
		[ "ID товара: ", props.id ],
		[ "ISBN: ", props.isbn ],
		[ "Страниц: ", props.page_count ],
		[ "Оформление: ", props.formalization ],
		[ "Иллюстрации: ", props.illustration ],
		[ "Масса: ", props.mass ],
		[ "Размеры: ", props.size ],
		[ "Подробнее: ", props.link ]
	];
	return (
		<div className={classes.ProductDetails}>
			<div>
				<img src={props.image} alt={props.title} />
			</div>
			<div className="d-flex align-items-center">
				<h3 className="mb-0 mr-3">Рейтинг книги</h3>
				<Stars rate={Math.round(props.rate)} isBig />
			</div>

			<table>
				<thead />
				<tbody>
					{rows.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row[0]}</td>
								<td>{row[1]}</td>
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
