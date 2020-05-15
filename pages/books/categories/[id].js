import React, { useState, useEffect } from "react";
import axios from "../../../axios-api";

import { CategoriesLayout } from "../../../layouts";

import { Row, Col } from "react-bootstrap";
import { Products } from "../../../components/";

const BooksPage = props => {
	const [ books, setBooks ] = useState({});
	const [ loading, setLoading ] = useState(true);
	// const categoryContext = useContext(CategoryContext);
	useEffect(() => {
		setBooks(props.books);
		setLoading(false);
	}, []);

	return (
		<CategoriesLayout>
			{!loading ? (
				books.map(book => {
					return (
						<React.Fragment key={book.id}>
							<Row>
								<Col>
									<h2>{book.title}</h2>
								</Col>
							</Row>
							<Row>
								<Products items={book.books} />
							</Row>
						</React.Fragment>
					);
				})
			) : null}
		</CategoriesLayout>
	);
};
export const getServerSideProps = async ({ query }) => {
	const res = await axios.get("categories/books");
	const books = res.data.results;
	return {
		props: {
			books
		}
	};
};
// export const getStaticPaths = async () => {
// 	const res = await axios.get("categories/books");
// 	const { results } = res.data;

// 	const paths = results.map(category => {
// 		return {
// 			params: {
// 				id: category.id.toString()
// 			}
// 		};
// 	});
// 	return {
// 		paths,
// 		fallback: false
// 	};
// };
// export const getStaticProps = async context => {
// 	const res = await axios.get("categories/books");
// 	const books = res.data.results;
// 	return {
// 		props: {
// 			books
// 		}
// 	};
// };

export default BooksPage;
