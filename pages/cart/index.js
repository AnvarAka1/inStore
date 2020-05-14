import React, { useState, useEffect, useContext } from "react";

import Router from "next/router";
import { useForm } from "../../hooks";
import CartContext from "../../store/CartContext";
import { Row, Col, Button } from "react-bootstrap";
import { Products, MakeOrder } from "../../components";
const CartPage = props => {
	const [ price, setPrice ] = useState(0);
	const [ books, setBooks ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const cartContext = useContext(CartContext);
	const codeControl = useForm();
	useEffect(() => {
		setBooks(props.books);
		setPrice(props.price);
		setLoading(false);
	}, []);

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
					{!loading && <Products items={books} onAddRemoveItem={cartContext.onAddRemoveItem} />}
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
const getBooks = () => [
	{
		id: 0,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 3,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 1,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 1,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 2,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 3,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 0,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 4,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 5,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 6,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 7,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 5,
		currentPrice: "39500",
		price: "55000"
	},
	{
		id: 8,
		img: "/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39500",
		price: "55000"
	}
];

CartPage.getInitialProps = async context => {
	const books = getBooks();
	const price = books.reduce((sum, book) => {
		return sum + +book.price;
	}, 0);

	return {
		pathname: context.pathname,
		price,
		books
	};
};
export default CartPage;
