import React, { useState, useEffect, useContext } from "react";
import { parseCookies } from "../../helpers/utils";
import { LangContext } from "../../store";
import axios from "../../axios-api";
import ErrorPage from "../404";
import { Row, Col } from "react-bootstrap";
import { Products } from "../../components";
import { ProfileLayout } from "../../layouts";
import Router from "next/router";
const FavouritesPage = ({ productsProps, error }) => {
	const [products, setProducts] = useState(productsProps);
	const langContext = useContext(LangContext);
	useEffect(() => {
		console.log(Router.pathname);
		Router.replace(Router.pathname, `?l=${langContext.lang}`);
	}, [langContext.lang]);
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
					<Products items={products} lang={langContext.lang} />
				) : (
					<Col>
						<h5 className="text-secondary">Пусто</h5>
					</Col>
				)}
			</Row>
		</ProfileLayout>
	);
};
export const getServerSideProps = async ({ query, req }) => {
	const lang = ["ru", "en", "uz"];
	let res = null;
	let error = null;
	console.log(query);
	try {
		res = await axios.get(lang[+query.l || 0] + "/profile/favourites", {
			headers: {
				Authorization: `Bearer ${parseCookies(req).token}`
			}
		});
	} catch (err) {
		console.log("ERROR");
		error = "Error";
		return {
			props: {
				error
			}
		};
	}
	const products = res.data.results;
	console.log(products);
	return {
		props: {
			productsProps: products,
			error
		}
	};
};

export default FavouritesPage;
