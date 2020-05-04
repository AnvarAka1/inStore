import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import CategoryContext from "../store/CategoryContext";
import CartContext from "../store/CartContext";
import { categorySelector } from "../helpers/utils";

let _selectedId = 0;
export default function MyApp({ Component, pageProps }) {
	const [ cart, setCart ] = useState([]);
	const [ categories, setCategories ] = useState([
		{
			id: 0,
			title: "Все",
			imgs: [ "/static/images/icons/all.png", "/static/images/icons/all-active.png" ],
			isActive: true
		},
		{
			id: 1,
			title: "Сборники",
			imgs: [ "/static/images/icons/compilations.png", "/static/images/icons/compilations-active.png" ],
			isActive: false
		},
		{
			id: 2,
			title: "Аудиокниги",
			imgs: [ "/static/images/icons/audio.png", "/static/images/icons/audio-active.png" ],
			isActive: false
		},
		{
			id: 3,
			title: "Печатные книги",
			imgs: [ "/static/images/icons/book.png", "/static/images/icons/book-active.png" ],
			isActive: false
		},
		{
			id: 4,
			title: "Электронные книги",
			imgs: [ "/static/images/icons/pdf.png", "/static/images/icons/pdf-active.png" ],
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
			<CategoryContext.Provider value={{ categories, categoryHandler }}>
				<Component {...pageProps} />
			</CategoryContext.Provider>
		</CartContext.Provider>
	);
}
