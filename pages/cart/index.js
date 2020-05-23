import React, { useContext } from "react";
import { CartLayout } from "../../layouts";
import { CartContext, LangContext } from "../../store";
import { Row, Col, Button } from "react-bootstrap";
import { Products } from "../../components";

const CartPage = props => {
	const cartContext = useContext(CartContext);
	const langContext = useContext(LangContext);
	const lang = langContext.lang;
	return (
		<CartLayout>
			<Row>
				<Col>
					<h2>Корзина</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="d-flex align-items-center">
						<h3 className="text-normal mb-0 mr-3">Всего в корзине {cartContext.cart.length}</h3>
						<Button variant="secondary text-small" onClick={cartContext.onClearCart}>
							Сбросить корзину
						</Button>
					</div>
				</Col>
			</Row>
			<Row className="mt-3">
				{cartContext.cart.length ? (
					<Products items={cartContext.cart} onAddRemoveItem={cartContext.onAddRemoveItem} lang={lang} />
				) : (
					<Col>
						<h4 className="text-secondary">Корзина пуста</h4>
					</Col>
				)}
			</Row>
		</CartLayout>
	);
};

export default CartPage;
