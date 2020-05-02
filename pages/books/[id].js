import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "../../hooks";
import { Row, Col } from "react-bootstrap";
import { ProductDetails, ProductDescription, Comments, ProductsCarousel } from "../../components/";
import { Layout } from "../../layouts";

const BookPage = props => {
	const [ book, setBook ] = useState(null);
	const [ otherBooks, setOtherBooks ] = useState([]);
	const [ rate, setRate ] = useState(0);
	const [ loading, setLoading ] = useState(true);

	const commentControl = useForm();
	useEffect(() => {
		setBook(props.book);
		setOtherBooks(props.otherBooks);
		setLoading(false);
	}, []);
	const commentSubmitHandler = event => {
		event.preventDefault();
		console.log("Submitted");
	};
	const rateHandler = id => {
		setRate(id + 1);
	};
	return (
		<Layout>
			<Row>
				<Col sm={5}>
					{!loading && (
						<ProductDetails img={book.img} rate={book.rate} details={book.details} social={null} />
					)}
				</Col>
				<Col sm={7}>
					<ProductDescription {...book} />
					{!loading && (
						<Comments
							items={book.responses}
							rate={rate}
							onSubmit={commentSubmitHandler}
							commentControl={commentControl}
							rateClicked={rateHandler}
							isAuthorized={true}
						/>
					)}

					<h3>Также вас может заинтересовать</h3>
					<ProductsCarousel items={otherBooks} responsive={{ lg: 4 }} />
				</Col>
			</Row>
		</Layout>
	);
};

const getBook = () => {
	return {
		id: 0,
		date: "2019",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		img: "/static/images/items/books/1.png",
		type: 0,
		description:
			'"Нескучные десерты" - вторая книга от шеф-повара популярных ресторанов "Техникум" и "Сахалин". Веселый и обаятельный Виталий Истомин давно покорил кулинарный Олимп и теперь настроен помочь нам достичь тех же вершин. В новой книге автор познакомит нас с лучшими рецептами выпечки и классическими десертами, откроет свои лайфхаки по работе с капризными ингредиентами, а также ненавязчиво поделится обрывками своих наблюдений на многие темы: любовь, отношения и поиск себя.',
		price: "55 900",
		currentPrice: "39 139",
		rate: 4,
		details: {
			id: "740219",
			ISBN: "978-5-04-105727-5",
			pageCount: "144 (Мелованная)",
			formalization: "Тип обложки: 7Б - твердая, Оформление: Ляссе, Покрытие софттач",
			illustration: "Цветные",
			mass: "650 г",
			size: "248x205x15 мм",
			link: "https://www.labirint.ru/books/740219/"
		},
		responses: [
			{
				id: 0,
				name: "Лазарева Анна Романовна",
				rate: 4,
				text:
					"Не все рецепты точны и выверены, но Виталию можно прощать ошибочки почти бесконечно! Обожаю его и его рецепты.",
				date: "13.03.2020 18:33:46"
			},
			{
				id: 1,
				name: "Светлана Михайлова",
				rate: 4,
				text:
					"С нетерпением ждала вторую книгу и не прогадала! Великолепные иллюстрации, рецепты простые и действительно нескучные. Лучший подарок на 8 марта",
				date: "15.04.2020 15:28:01"
			},
			{
				id: 2,
				name: "Светлана Михайлова",
				rate: 4,
				text:
					"С нетерпением ждала вторую книгу и не прогадала! Великолепные иллюстрации, рецепты простые и действительно нескучные. Лучший подарок на 8 марта",
				date: "15.04.2020 15:28:01"
			},
			{
				id: 3,
				name: "Светлана Михайлова",
				rate: 4,
				text:
					"С нетерпением ждала вторую книгу и не прогадала! Великолепные иллюстрации, рецепты простые и действительно нескучные. Лучший подарок на 8 марта",
				date: "15.04.2020 15:28:01"
			},
			{
				id: 4,
				name: "Светлана Михайлова",
				rate: 4,
				text:
					"С нетерпением ждала вторую книгу и не прогадала! Великолепные иллюстрации, рецепты простые и действительно нескучные. Лучший подарок на 8 марта",
				date: "15.04.2020 15:28:01"
			}
		]
	};
};

const getPopularBooks = () => [
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
BookPage.getInitialProps = async context => {
	let book = getBook();
	book.details = {
		...book.details,
		link: (
			<Link href={book.details.link}>
				<a>{book.details.link}</a>
			</Link>
		)
	};
	return {
		book: getBook(),
		otherBooks: getPopularBooks()
	};
};
export default BookPage;
