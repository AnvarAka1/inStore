import React, { useState, useEffect, useContext } from "react";

import Router from "next/router";
import { useForm } from "../../hooks";
import CartContext from "../../store/CartContext";
import { Row, Col, Button } from "react-bootstrap";
import { Products, MakeOrder } from "../../components";
const CartPage = props => {
	const [ price, setPrice ] = useState(0);

	const [ loading, setLoading ] = useState(true);
	const cartContext = useContext(CartContext);
	const codeControl = useForm();
	useEffect(
		() => {
			const price = cartContext.cart.reduce((sum, product) => {
				return sum + +product.price;
			}, 0);
			setPrice(price);
			setLoading(false);
		},
		[ cartContext ]
	);

	const orderHandler = () => {
		// when the api is ready, it will be easier to know
		// which query params to use and from which variables

		// Router.push({
		// 	pathname: '/cart/order',
		// 	query: {
		// 		price,
		// 		cart
		// 	}
		// })
		// but for now, just route
		Router.push({
			pathname: props.pathname + "/order",
			query: {
				code: codeControl.value
			}
		});
	};
	return (
		<Row>
			<Col md={9}>
				<Row>
					<Col>
						<h2>Корзина</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="d-flex align-items-center">
							<h3 className="text-normal mb-0 mr-3">Всего в корзине {cartContext.cart.length}</h3>
							<Button onClick={cartContext.onClearCart}>Сбросить корзину</Button>
						</div>
					</Col>
				</Row>
				<Row className="mt-3">
					{!loading && cartContext.cart.length ? (
						<Products items={cartContext.cart} onAddRemoveItem={cartContext.onAddRemoveItem} />
					) : (
						<Col>
							<h4 className="text-secondary">Корзина пуста</h4>
						</Col>
					)}
				</Row>
			</Col>
			<Col md={3}>
				<MakeOrder
					isValidCode={true}
					price={price}
					discount={20}
					productCount={cartContext.cart.length}
					codeControl={codeControl}
					ordered={orderHandler}
				/>
			</Col>
		</Row>
	);
};

CartPage.getInitialProps = async context => {
	return {
		pathname: context.pathname
	};
};
export default CartPage;
