import React, {useContext, useEffect} from "react";
import axios from "../../../../axios-api";
import {LangContext} from "../../../../store";
import {Col, Row} from "react-bootstrap";
import Router from "next/router";
import {Products} from "../../../../components";
import {CategoriesLayout} from "../../../../layouts/";

const CompilationPage = ({ title, books, query }) => {
	const langContext = useContext(LangContext);
	useEffect(() => {
		Router.replace(
			`${Router.pathname}?l=${langContext.lang}`,
			`/books/categories/compilations/${query.id}?l=${langContext.lang}`
		);
	}, [langContext.lang]);
	return (
		<CategoriesLayout withoutGenre>
			{books && (
				<React.Fragment>
					<Row>
						<Col>
							<h2 className="mb-3">{title}</h2>
						</Col>
					</Row>
					<Row>
						<Products items={books} />
					</Row>
				</React.Fragment>
			)}
		</CategoriesLayout>
	);
};
export const getServerSideProps = async ({ query }) => {
	const lang = ["ru", "en", "uz"];
	let res = null;
	let error = null;
	let books = null;

	let title = null;
	try {
		res = await axios.get(`${lang[+query.l || 0]}/collections/books?pk=${query.id}`);
	} catch (err) {
		error = "Error";
		return {
			props: {
				error
			}
		};
	}
	books = res.data.results[0].books;
	title = res.data.results[0].title;
	return {
		props: {
			title,
			books,
			query
		}
	};
};
export default CompilationPage;
