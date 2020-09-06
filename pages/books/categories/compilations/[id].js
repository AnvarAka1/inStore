import React, {useEffect} from "react";
import axios from "../../../../axios-api";
import {Col, Row} from "react-bootstrap";
import {useRouter} from "next/router";
import {Products} from "../../../../components";
import {CategoriesLayout} from "../../../../layouts/";
import {path, prop} from 'ramda'
import {getLang} from "../../../../helpers/utils";
import {useTranslation} from "react-i18next";
import Head from "next/head";

const CompilationPage = ({ title, books, query }) => {
	const { i18n } = useTranslation()
	const router = useRouter()

	useEffect(() => {
		router.replace(
			`${router.pathname}?l=${i18n.language}`,
			`/books/categories/compilations/${query.id}?l=${i18n.language}`
		);
	}, [i18n.language]);



	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
			</Head>
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
		</>
	);
};
export const getServerSideProps = async ({ req, query }) => {
	const lang = getLang(req)

	try {
		const res = await axios.get(`${lang}/collections/books?pk=${query.id}`);

		const data = path(['data', 'results', 0], res);
		const books = prop('books', data)
		const title = prop('title', data)

		return {
			props: {
				title,
				books,
				query
			}
		}
	} catch (err) {
		const error = "Error";
		return {
			props: {
				error
			}
		};
	}
};

export default CompilationPage;
