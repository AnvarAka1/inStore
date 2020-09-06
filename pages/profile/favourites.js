import React, {useState} from "react";
import {getLang, parseCookies} from "../../helpers/utils";
import {defaultTo, path, propOr} from 'ramda'
import axios from "../../axios-api";
import ErrorPage from "../404";
import {Col, Row} from "react-bootstrap";
import {Products} from "../../components";
import {ProfileLayout} from "../../layouts";
import {LANGS} from "../../constants";

const FavouritesPage = ({ productsProps, error }) => {
	const defaultProducts = defaultTo([], productsProps)
	const [products, setProducts] = useState(defaultProducts);


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
export const getServerSideProps = async ({ req }) => {
	const lang = getLang(req)

	try {
		const res = await axios.get(`${lang}/profile/favourites`, req);

		const products = path(['data', 'results'], res)
		return {
			props: {
				productsProps: products
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

export default FavouritesPage;
