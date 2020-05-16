import React, { useState, useEffect } from "react";
import axios from "../../../axios-api";
import { CategoriesLayout } from "../../../layouts";
import { Row, Col } from "react-bootstrap";
import { Products } from "../../../components";
// ?pk=1
const BooksPage = props => {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<CategoriesLayout>
			{!loading &&
				props.results.map(result => (
					<React.Fragment key={result.id}>
						<Row>
							<Col>
								<h2>{result.title}</h2>
							</Col>
						</Row>
						<Row>
							<Products items={result.books} />
						</Row>
					</React.Fragment>
				))}
		</CategoriesLayout>
	);
};

export const getServerSideProps = async context => {
	// axios
	const res = await axios.get("categories/books");
	const { results } = res.data;

	return {
		props: {
			results: results
		}
	};
};
export default BooksPage;
