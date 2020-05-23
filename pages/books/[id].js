import React, { useState, useEffect, useContext } from "react";
import { parseCookies } from "../../helpers/utils";
import axios from "../../axios-api";
import { connect } from "react-redux";
import { useForm } from "../../hooks";
import { CartContext, AuthModalContext, LangContext } from "../../store";

import { Row, Col } from "react-bootstrap";
import { ProductDetails, ProductDescription, Comments, ProductsCarousel } from "../../components/";

const BookPage = ({ bookProps, isAuthorized }) => {
	const [ book, setBook ] = useState(bookProps);
	const [ rate, setRate ] = useState(0);
	const [ isDescriptionExpanded, setIsDescriptionExpanded ] = useState(false);
	const cartContext = useContext(CartContext);
	const langContext = useContext(LangContext);
	const authModalContext = useContext(AuthModalContext);
	const commentControl = useForm();
	useEffect(
		() => {
			setBook(bookProps);
		},
		[ bookProps ]
	);
	const expandDescription = () => {
		setIsDescriptionExpanded(true);
	};
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
	// JSX
	const lang = langContext.lang;
	const content = {
		headers: [ "Также вас может заинтересовать", "This may be interesting for you", "Uzb" ]
	};
	return (
		<Row>
			<Col sm={4}>{<ProductDetails {...book} social={null} />}</Col>
			<Col sm={8}>
				<Row>
					<Col md={7}>
						<ProductDescription
							{...book}
							lang={lang}
							expandDescription={expandDescription}
							isDescriptionExpanded={isDescriptionExpanded}
							cartClicked={() => cartContext.onAddRemoveItem(book)}
							isInCart={cartContext.onFindInCart(book.id)}
							favouriteClicked={favouriteHandler}
							isAuthorized={isAuthorized}
						/>

						<Comments
							lang={lang}
							items={book.feedback}
							rate={rate}
							onSubmit={commentSubmitHandler}
							commentControl={commentControl}
							rateClicked={rateHandler}
							onAuth={authModalContext.authModal.onShow}
							isAuthorized={isAuthorized}
						/>
					</Col>
				</Row>
				<h3 className="mt-5">{content.headers[lang]}</h3>
				<ProductsCarousel items={book.related} lang={lang} responsive={{ lg: 4, xl: 4, sm: 4 }} />
			</Col>
		</Row>
	);
};

export const getServerSideProps = async ({ query, req }) => {
	let res = null;

	const token = parseCookies(req).token;

	try {
		res = await axios.get("books/" + query.id, {
			headers: token
				? {
						Authorization: `Bearer ${token}`
					}
				: null
		});
	} catch (error) {
		return {
			props: {
				error: "Error"
			}
		};
	}
	const { data } = res;
	const bookProps = {
		...data,
		titles: [ data.title_ru, data.title_en, data.title_uz ],
		authors: [ data.author_ru, data.author_en, data.author_uz ],
		descriptions: [ data.description_ru, data.description_en, data.description_uz ],
		formalizations: [ data.formalization_ru, data.formalization_en, data.formalization_uz ],
		illustrations: [ data.illustration_ru, data.illustration_en, data.illustration_uz ],
		links: [ data.link_ru, data.link_en, data.link_uz ],
		masses: [ data.mass_ru, data.mass_en, data.mass_uz ]
	};

	return {
		props: {
			bookProps
		}
	};
};
const mapStateToProps = state => {
	return {
		isAuthorized: state.auth.token !== null
	};
};
export default connect(mapStateToProps)(BookPage);
