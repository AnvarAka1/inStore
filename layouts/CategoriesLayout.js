import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { Categories } from "../components/";
import axios from "../axios-api";
let _isMounted = false;
const CategoriesLayout = props => {
	const [ categories, setCategories ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		_isMounted = true;
		axios
			.get("genres")
			.then(res => {
				if (_isMounted) setCategories(res.data.results);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				if (_isMounted) setLoading(false);
			});
		return () => (_isMounted = false);
	}, []);
	return (
		<Row>
			<Col sm={3}>
				<Categories items={getStaticCats()} isStatic={true} />
				{!loading && <Categories items={categories} />}
			</Col>
			<Col sm={9}>{props.children}</Col>
		</Row>
	);
};

const getStaticCats = () => [
	{
		id: 0,
		title: "Все",
		icon: "/images/icons/all.png"
	},
	{
		id: 1,
		title: "Сборники",
		icon: "/images/icons/compilations.png"
	},
	{
		id: 2,
		title: "Аудиокниги",
		icon: "/images/icons/audio.png"
	},
	{
		id: 3,
		title: "Печатные книги",
		icon: "/images/icons/book.png"
	},
	{
		id: 4,
		title: "Электронные книги",
		icon: "/images/icons/pdf.png"
	}
];

export default CategoriesLayout;
