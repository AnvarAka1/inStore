import React from "react";
import { ProfileLayout } from "../../layouts";
import { Products } from "../../components";
import { Row, Col } from "react-bootstrap";
const LibraryPage = props => {
	return (
		<ProfileLayout>
			<Row>
				<Col>
					<h2>Моя библиотека</h2>
				</Col>
			</Row>
			<Row>
				<Products items={getBooks()} />
			</Row>
		</ProfileLayout>
	);
};
const getBooks = () => [
	{
		id: 0,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 3,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 1,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 1,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 2,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 3,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 0,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 4,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 5,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 6,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 7,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 5,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 8,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	}
];

export default LibraryPage;
