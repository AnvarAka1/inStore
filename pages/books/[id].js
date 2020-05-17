import React, { useState, useEffect, useContext } from "react";
import { parseCookies } from "../../helpers/utils";
import axios from "../../axios-api";
import { connect } from "react-redux";
import { useForm } from "../../hooks";
import CartContext from "../../store/CartContext";
import { Row, Col } from "react-bootstrap";
import { ProductDetails, ProductDescription, Comments, ProductsCarousel } from "../../components/";

const BookPage = ({ bookProps, isAuthorized }) => {
	const [ book, setBook ] = useState(bookProps);
	const [ rate, setRate ] = useState(0);
	const cartContext = useContext(CartContext);
	const commentControl = useForm();
	useEffect(
		() => {
			setBook(bookProps);
		},
		[ bookProps ]
	);
	const commentSubmitHandler = event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("rate", rate);
		formData.append("text", commentControl.value);
		axios
			.post(`books/${book.id}/feedback`, formData, {
				headers: {
					Authorization: `Bearer ${parseCookies(null).token}`
				}
			})
			.then(res => {
				commentControl.clear;
				return axios.get("books/" + book.id);
			})
			.then(res => {
				setBook(res.data);
			})
			.catch(err => console.log(err));
	};
	const favouriteHandler = () => {
		axios
			.post(`profile/favourites/${book.id}`, null, {
				headers: {
					Authorization: `Bearer ${parseCookies(null).token}`
				}
			})
			.then(res => {
				const bookCopy = {
					...book,
					in_favourites: !book.in_favourites
				};
				setBook(bookCopy);
			})
			.catch(err => {
				console.log(err);
			});
	};
	const rateHandler = id => {
		setRate(id + 1);
	};
	return (
		<Row>
			<Col sm={5}>{<ProductDetails {...book} social={null} />}</Col>
			<Col sm={7}>
				<React.Fragment>
					<ProductDescription
						{...book}
						cartClicked={() => cartContext.onAddRemoveItem(book)}
						isInCart={cartContext.onFindInCart(book.id)}
						favouriteClicked={favouriteHandler}
					/>

					<Comments
						items={book.feedback}
						rate={rate}
						onSubmit={commentSubmitHandler}
						commentControl={commentControl}
						rateClicked={rateHandler}
						isAuthorized={isAuthorized}
					/>
				</React.Fragment>
				<h3>Также вас может заинтересовать</h3>
				<ProductsCarousel items={book.related} responsive={{ lg: 4 }} />
			</Col>
		</Row>
	);
};

export const getServerSideProps = async ({ query }) => {
	const res = await axios.get("books/" + query.id);
	return {
		props: {
			bookProps: res.data
		}
	};
};
const mapStateToProps = state => {
	return {
		isAuthorized: state.auth.token !== null
	};
};
export default connect(mapStateToProps)(BookPage);
