import React, {useContext, useEffect, useState} from "react";
import Router from "next/router";
import {useForm} from "../hooks";
import {LangContext} from "../store";
import {Col, Row} from "react-bootstrap";
import {MakeOrder} from "../components";
import {useCart} from "../components/Cart";

const CartLayout = ({ children, isOrderPage }) => {
	const [currentPrice, setCurrentPrice] = useState(0);
	const [oldPrice, setOldPrice] = useState(0);
	const [orderCase, setOrderCase] = useState(0);
	const { cart, getCase } = useCart()
	const langContext = useContext(LangContext)
	const codeControl = useForm();
	useEffect(() => {
		const oldPrice = cart.reduce((sum, product) => {
			return sum + +product.price;
		}, 0);
		const currentPrice = cart.reduce((sum, product) => {
			return sum + +product.current_price;
		}, 0);
		setOldPrice(oldPrice);
		setCurrentPrice(currentPrice);
		setOrderCase(getCase());
	}, [cart]);
	useEffect(() => {
		Router.replace({
			pathname: Router.pathname,
			query:{
				l: langContext.lang,
				case: orderCase
			}
		})
	}, [langContext.lang, orderCase])
	const orderHandler = () => {
		if (!isOrderPage) {
			Router.push({
				pathname: "/cart/order",
				query: {
					l: langContext.lang,
					case: orderCase
				}
			});
		}
	};

	return (
		<Row>
			<Col md={9}>{children}</Col>
			<Col md={3}>
				<MakeOrder
					lang={langContext.lang}
					isValidCode={true}
					currentPrice={currentPrice}
					oldPrice={oldPrice}
					productCount={cart.length}
					codeControl={codeControl}
					ordered={orderHandler}
				/>
			</Col>
		</Row>
	);
};

export default CartLayout;
