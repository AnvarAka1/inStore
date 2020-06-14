import React from "react";
import {Button} from "react-bootstrap";

const makeOrder = ({ productCount, currentPrice, oldPrice, ordered, lang }) => {
	const content = {
		firstRowItems: ['товара на сумму', 'products for', 'Uzb'],
		currencies: ['сум', "so'm", "so'm"],
		discounts: ['Все скидки','All discounts', 'Uzb'],
		totals: ['Итого', 'Total', 'Uzb'],
		checkouts: ['Оформить заказ', 'Checkout', 'Uzb']
	}
	return (
		<div>
			<h6>Сумма</h6>
			<table className="w-100">
				<tbody>
					<tr>
						<th>
							<p>{productCount} {content.firstRowItems[lang]}</p>
						</th>
						<th>
							<p className='text-right'>{oldPrice} {content.currencies[lang]}</p>
						</th>
					</tr>
					<tr>
						<th>
							<p>{content.discounts[lang]}</p>
						</th>
						<th>
							<p className='text-right'>{currentPrice - oldPrice} {content.currencies[lang]}</p>
						</th>
					</tr>
				</tbody>
			</table>
			{/* <Form>
				<Form.Control value={codeControl.value} onChange={codeControl.onChange} />
				<p className="text-xs">
					Информация о промо-коде:{" "}
					{isValidCode ? (
						<span className="text-success">Успешно, вы получили {discount}% скидки</span>
					) : (
						<span className="text-primary">Не действителен</span>
					)}
				</p>
			</Form> */}
			<hr />
			<div className="d-flex justify-content-between align-items-center">
				<h6>{content.totals[lang]}</h6>
				<h6>{currentPrice}</h6>
			</div>
			<Button onClick={ordered} type="submit" disabled={productCount < 1}>
				{content.checkouts[lang]}
			</Button>
		</div>
	);
};
makeOrder.defaultProps = {
	discount: 0,
	price: 0,
	codeControl: {
		value: "",
		onChange: null
	}
};
export default makeOrder;
