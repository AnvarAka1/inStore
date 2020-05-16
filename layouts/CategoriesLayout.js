import React, { useState, useEffect } from "react";
import { getStaticCategories } from "../lib/categories";
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
				<Categories items={getStaticCategories()} isStatic={true} />
				{!loading && <Categories items={categories} />}
			</Col>
			<Col sm={9}>{props.children}</Col>
		</Row>
	);
};

export default CategoriesLayout;
