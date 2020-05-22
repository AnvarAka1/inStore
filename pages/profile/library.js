import React from "react";
import { ProfileLayout } from "../../layouts";
import { Products } from "../../components";
import ErrorPage from "../404";

import { Row, Col } from "react-bootstrap";
const LibraryPage = ({ error }) => {
	if (error) return <ErrorPage />;
	return (
		<ProfileLayout>
			<Row>
				<Col>
					<h2>Моя библиотека</h2>
				</Col>
			</Row>
			<Row>{/* <Products items={getBooks()} /> */}</Row>
		</ProfileLayout>
	);
};

export const getServerSideProps = async ({ req }) => {
	let res = null;
	let error = null;
	try {
		res = await axios.get("/library", {
			headers: {
				Authorization: `Bearer ${parseCookies(req).token}`
			}
		});
	} catch (err) {
		error = "Error";
		return {
			props: {
				error
			}
		};
	}
	const userData = res.data;
	return {
		props: {
			userData
		}
	};
};
export default LibraryPage;
