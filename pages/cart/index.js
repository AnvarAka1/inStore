import React, {useContext} from "react";
import {CartLayout} from "../../layouts";
import {LangContext} from "../../store";
import {Button, Col, Row} from "react-bootstrap";
import {Products} from "../../components";
import {useCart, useCartManipulator} from "../../components/Cart";

const CartPage = props => {
	const {cart} = useCart()
	const { onAddRemoveItem, onClearCart } = useCartManipulator()
	const langContext = useContext(LangContext);
	const lang = langContext.lang;
	const content = {
		titles: ['Корзина', 'Cart', 'Savat'],
		totals: ['Всего в корзине', 'Total in cart', 'Savatda jami'],
		resets: ['Сбросить корзину', 'Reset cart', 'Savat bo\'shatish'],
		empties: ['Корзина пуста', 'Cart is empty', 'Savat bo\'sh']
	}
	const responsive = {
		md: 3,
		lg: 2,
		sm: 3,
		xs: 6
	}
	return (
		<CartLayout>
			<Row>
				<Col>
					<h2>{content.titles[lang]}</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="d-flex align-items-center">
						<h3 className="text-normal mb-0 mr-3">{content.totals[lang]} {cart.length}</h3>
						<Button variant="secondary text-small" onClick={onClearCart}>
							{content.resets[lang]}
						</Button>
					</div>
				</Col>
			</Row>
			<Row className="mt-3">
				{cart.length ? (
					<Products
						{...responsive}
						items={cart}
						onAddRemoveItem={onAddRemoveItem}
						lang={lang}
					/>
				) : (
					<Col>
						<h4 className="text-secondary">{content.empties[lang]}</h4>
					</Col>
				)}
			</Row>
		</CartLayout>
	);
};

export default CartPage;
