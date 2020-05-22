import React from "react";
import { parseCookies } from "../../helpers/utils";
import axios from "../../axios-api";
import ErrorPage from "../404";
import { Row, Col } from "react-bootstrap";
import { Products } from "../../components";
import { ProfileLayout } from "../../layouts";
const FavouritesPage = ({ products, error }) => {
	if (error) return <ErrorPage />;
	return (
		<ProfileLayout>
			<Row>
				<Col>
					<h2>Избранные</h2>
				</Col>
			</Row>
			<Row>
				{products.length ? (
					<Products items={products} />
				) : (
					<Col>
						<h5 className="text-secondary">Пусто</h5>
					</Col>
				)}
			</Row>
		</ProfileLayout>
	);
};
export const getServerSideProps = async ctx => {
	let res = null;
	let error = null;
	try {
		res = await axios.get("profile/favourites", {
			headers: {
				Authorization: `Bearer ${parseCookies(ctx.req).token}`
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
	const products = res.data.results;
	return {
		props: {
			products
		}
	};
};

export default FavouritesPage;
