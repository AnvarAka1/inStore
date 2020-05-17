import React, { Children } from "react";
import axios from "../axios-api";
import { Products } from "../components";
import { Row, Col } from "react-bootstrap";
const SeachPage = ({ results }) => {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h5>Результаты поиска:</h5>
				</Col>
			</Row>
			<Row>
				<Products items={results} />
			</Row>
		</React.Fragment>
	);
};

export const getServerSideProps = async ({ query }) => {
	console.log(query);
	const res = await axios.get(`/books/search?q=${query.q}`);
	const { results } = res.data;
	return {
		props: {
			results
		}
	};
};
export default SeachPage;
