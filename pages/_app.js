import React, { useState, useEffect } from "react";
import * as actions from "../store/actions";
import { Provider } from "react-redux";
import withReduxStore from "../helpers/with-redux-store";
import CategoryContext from "../store/CategoryContext";
import CartContext from "../store/CartContext";
import { Layout } from "../layouts";
import { categorySelector } from "../helpers/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import App from "next/app";

let _selectedId = 0;

const MyComponent = ({ children, store }) => {
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
		store.dispatch(actions.authCheckState());
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
	// adds product to cart
	const addRemoveItemFromCart = product => {
		let cartCopy = [ ...cart ];
		// is the product in the cart already?
		const item = cartCopy.find(item => {
			return item.id === product.id;
		});

		// this product is not in the cart. push it to the array
		if (item === undefined) {
			cartCopy.push(product);
		} else {
			// just remove this product from the cart
			cartCopy = cartCopy.filter(item => {
				return item.id !== product.id;
			});
		}
		//  save it
		localStorage.setItem("cart", JSON.stringify(cartCopy));

		setCart(cartCopy);
	};
	const findItemInCart = id => {
		let cartCopy = [ ...cart ];
		const item = cartCopy.find(item => {
			return item.id === id;
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
				<MyComponent store={store}>
					<Component {...pageProps} />
				</MyComponent>
			</Provider>
		);
	}
}

export default withReduxStore(myApp);
