import React, { useState, useEffect, useContext } from "react";
import CategoryContext from "../../store/CategoryContext";
import { Layout } from "../../layouts";
import { categorySelector } from "../../helpers/utils";
import { Row, Col } from "react-bootstrap";
import { Categories, Products } from "../../components/";
let _selectedId = -1;
const BooksPage = props => {
	const [ categories, setCategories ] = useState([]);
	const [ books, setBooks ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const categoryContext = useContext(CategoryContext);
	useEffect(() => {
		setCategories(props.categories);
		setBooks(props.books);
		setLoading(false);
	}, []);
	const categoryHandler = id => {
		const cats = categorySelector(id, [ ...categories ], _selectedId);
		if (cats) {
			setCategories(cats.categories);
			_selectedId = cats._selectedId;
		}
	};
	return (
		<Layout>
			<Row>
				<Col sm={3}>
					<Categories items={categoryContext.categories} onClick={categoryContext.categoryHandler} isStatic />
					{!loading ? <Categories items={categories} onClick={categoryHandler} /> : null}
				</Col>
				<Col sm={9}>
					<Row>{!loading ? <Products items={books.popular.books} title={books.popular.title} /> : null}</Row>
				</Col>
			</Row>
		</Layout>
	);
};

const getCategoryItems = () => [
	{
		id: 0,
		title: "Деловая литература",
		isActive: false
	},
	{
		id: 1,
		title: "Детективы и Триллеры",
		isActive: false
	},
	{
		id: 2,
		title: "Документальная литература",
		isActive: false
	},
	{
		id: 3,
		title: "Дом, ремесла, досуг, хобби",
		isActive: false
	},
	{
		id: 4,
		title: "Драматургия",
		isActive: false
	},
	{
		id: 5,
		title: "Искусство, Искусствоведение, Дизайн",
		isActive: false
	},
	{
		id: 6,
		title: "Компьютеры и Интернет",
		isActive: false
	},
	{
		id: 7,
		title: "Литература для детей",
		isActive: false
	},
	{
		id: 8,
		title: "Любовные романы",
		isActive: false
	},
	{
		id: 9,
		title: "Наука, Образование",
		isActive: false
	},
	{
		id: 10,
		title: "Поэзия",
		isActive: false
	},
	{
		id: 11,
		title: "Приключения",
		isActive: false
	},
	{
		id: 12,
		title: "Проза",
		isActive: false
	},
	{
		id: 13,
		title: "Прочее",
		isActive: false
	},
	{
		id: 14,
		title: "Религия, духовность, эзотерика",
		isActive: false
	},
	{
		id: 15,
		title: "Справочная литература",
		isActive: false
	},
	{
		id: 16,
		title: "Старинное",
		isActive: false
	}
];

const getBooks = () => {
	return {
		popular: {
			id: 0,
			title: "Популярные",
			books: [
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
			]
		}
	};
};
BooksPage.getInitialProps = async context => {
	// axios
	return {
		categories: getCategoryItems(),
		books: getBooks()
	};
};
export default BooksPage;
