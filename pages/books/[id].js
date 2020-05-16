import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios-api";
import { connect } from "react-redux";
import { useForm } from "../../hooks";
import CartContext from "../../store/CartContext";
import { Row, Col } from "react-bootstrap";
import { ProductDetails, ProductDescription, Comments, ProductsCarousel } from "../../components/";

const BookPage = props => {
	const [ book, setBook ] = useState(null);
	const [ otherBooks, setOtherBooks ] = useState([]);
	const [ rate, setRate ] = useState(0);
	const [ loading, setLoading ] = useState(true);
	const cartContext = useContext(CartContext);
	const commentControl = useForm();
	useEffect(() => {
		setBook(props.book);
		setOtherBooks(props.book.related);
		setLoading(false);
	}, []);
	const commentSubmitHandler = event => {
		event.preventDefault();
		console.log("Submitted");
	};
	const rateHandler = id => {
		setRate(id + 1);
	};
	return (
		<Row>
			<Col sm={5}>{!loading && <ProductDetails {...book} social={null} />}</Col>
			<Col sm={7}>
				{!loading && (
					<React.Fragment>
						<ProductDescription
							{...book}
							cartClicked={() => cartContext.onAddRemoveItem(book)}
							isInCart={cartContext.onFindInCart(book.id)}
						/>

						<Comments
							items={book.feedback}
							rate={rate}
							onSubmit={commentSubmitHandler}
							commentControl={commentControl}
							rateClicked={rateHandler}
							isAuthorized={props.isAuthorized}
						/>
					</React.Fragment>
				)}

				<h3>Также вас может заинтересовать</h3>
				<ProductsCarousel items={otherBooks} responsive={{ lg: 4 }} />
			</Col>
		</Row>
	);
};

export const getServerSideProps = async ({ query }) => {
	const res = await axios.get("books/" + query.id);
	return {
		props: {
			book: res.data
		}
	};
};
const mapStateToProps = state => {
	return {
		isAuthorized: state.auth.token !== null
	};
};
export default connect(mapStateToProps)(BookPage);
