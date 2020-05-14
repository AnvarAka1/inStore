import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import withReduxStore from "../helpers/with-redux-store";
// import withRedux from "next-redux-wrapper";
import CategoryContext from "../store/CategoryContext";
import CartContext from "../store/CartContext";
import { Layout } from "../layouts";
import { categorySelector } from "../helpers/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import App from "next/app";
// import { combineReducers, createStore } from "redux";
// import AuthReducer from "../store/reducers/auth";

let _selectedId = 0;
// const reducers = combineReducers({
// 	auth: AuthReducer
// });
// const makeStore = (initialState, options) => {
// 	return createStore(AuthReducer, initialState);
// };

const MyComponent = ({ children }) => {
	const [ cart, setCart ] = useState([]);
	const [ categories, setCategories ] = useState([
		{
			id: 0,
			title: "Все",
			imgs: [ "/images/icons/all.png", "/images/icons/all-active.png" ],
			isActive: true
		},
		{
			id: 1,
			title: "Сборники",
			imgs: [ "/images/icons/compilations.png", "/images/icons/compilations-active.png" ],
			isActive: false
		},
		{
			id: 2,
			title: "Аудиокниги",
			imgs: [ "/images/icons/audio.png", "/images/icons/audio-active.png" ],
			isActive: false
		},
		{
			id: 3,
			title: "Печатные книги",
			imgs: [ "/images/icons/book.png", "/images/icons/book-active.png" ],
			isActive: false
		},
		{
			id: 4,
			title: "Электронные книги",
			imgs: [ "/images/icons/pdf.png", "/images/icons/pdf-active.png" ],
			isActive: false
		}
	]);
	useEffect(() => {
		if (localStorage.getItem("cart")) {
			setCart(JSON.parse(localStorage.getItem("cart")));
		}
	}, []);

	const categoryHandler = id => {
		const cats = categorySelector(id, [ ...categories ], _selectedId);
		if (cats) {
			_selectedId = cats._selectedId;
			setCategories(cats.categories);
		}
	};
	const categoriesClearHandler = () => {
		let cats = [ ...categories ];
		cats.forEach(c => {
			c.isActive = false;
		});
		setCategories(cats);
	};
	const addRemoveItemFromCart = id => {
		let cartCopy = [ ...cart ];
		const item = cartCopy.find(item => {
			return item === id;
		});

		if (item === undefined) {
			cartCopy.push(id);
		} else {
			cartCopy = cartCopy.filter(item => {
				return item !== id;
			});
		}
		localStorage.setItem("cart", JSON.stringify(cartCopy));

		setCart(cartCopy);
	};
	const findItemInCart = id => {
		let cartCopy = [ ...cart ];
		const item = cartCopy.find(item => {
			return item === id;
		});
		if (item !== undefined) return true;
		return false;
	};
	const clearCartHandler = () => {
		console.log("Cleared");
		setCart([]);
		localStorage.removeItem("cart");
	};
	return (
		<CartContext.Provider
			value={{
				cart,
				onAddRemoveItem: addRemoveItemFromCart,
				onFindInCart: findItemInCart,
				onClearCart: clearCartHandler
			}}
		>
			<CategoryContext.Provider value={{ categories, categoryHandler, onClear: categoriesClearHandler }}>
				<Layout cartCount={cart.length}>{children}</Layout>
			</CategoryContext.Provider>
		</CartContext.Provider>
	);
};
class myApp extends App {
	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<MyComponent>
					<Component {...pageProps} />
				</MyComponent>
			</Provider>
		);
	}
}
// myApp.App = App;
// myApp.getInitialProps = ctx => {
// 	console.log(ctx);
// 	return {};
// };
// myApp.getInitialProps = async ({ Component, ctx }) => {
// 	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
// 	return {
// 		pageProps
// 	};
// };
export default withReduxStore(myApp);
// export default withRedux(makeStore)(myApp);
