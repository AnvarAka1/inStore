import React, { useContext } from "react";
import { ProfileLayout } from "../../layouts";
import { LangContext } from "../../store/";
import { Products } from "../../components";
import ErrorPage from "../404";
import { parseCookies } from "../../helpers/utils";
import axios from "../../axios-api";
import { Row, Col } from "react-bootstrap";
const LibraryPage = ({ books, error }) => {
	const langContext = useContext(LangContext);
	if (error) return <ErrorPage />;
	return (
		<ProfileLayout>
			<Row>
				<Col>
					<h2>Моя библиотека</h2>
				</Col>
			</Row>
			<Row>
				{books && books.length ? (
					<Products items={books} lang={langContext.lang} />
				) : (
					<Col>
						<h5 className="text-secondary">Пусто</h5>
					</Col>
				)}
			</Row>
		</ProfileLayout>
	);
};

export const getServerSideProps = async ({ req, query }) => {
	const lang = ["ru", "en", "uz"];
	console.log(lang[+query.l || 0]);
	let res = null;
	let error = null;
	try {
		res = await axios.get(lang[+query.l || 0] + "/profile/library", {
			headers: {
				Authorization: `Bearer ${parseCookies(req).token}`
			}
		});
	} catch (err) {
		error = "Error";
		console.log(err);

		return {
			props: {
				error
			}
		};
	}
	const books = res.data.results;
	return {
		props: {
			books
		}
	};
};
export default LibraryPage;
