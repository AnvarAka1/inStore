import React from "react";
import { Form, Button } from "react-bootstrap";
const makeOrder = ({ codeControl, isValidCode, productCount, price, discount, ordered }) => {
	return (
		<div>
			<h6>Сумма</h6>
			<table className="w-100">
				<tbody>
					<tr>
						<th>{productCount} товара на сумму</th>
						<th>{price} сум</th>
					</tr>
					<tr>
						<th>Все скидки</th>
						<th>{-1 * discount * 0.01 * price} сум</th>
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
				<h6>Итого:</h6>
				<h6>{price - discount * price}</h6>
			</div>
			<Button onClick={ordered} type="submit">
				Оформить заказ
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
