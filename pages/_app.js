import React, { useState } from "react";
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
	const categoryHandler = id => {
		const cats = categorySelector(id, [ ...categories ], _selectedId);
		if (cats) {
			_selectedId = cats._selectedId;
			setCategories(cats.categories);
		}
	};
	const addToCartHandler = id => {
		console.log("Item with id = ", id, "was added to cart");
		// add item if does not exist
	};
	const removeFromCartHandler = id => {
		console.log("Item with id = ", id, "was removed from cart");
		// remove item if exists
	};
	const increaseCartItemHandler = id => {
		console.log(id, "increased");
	};
	const reduceCartItemHandler = id => {
		console.log(id, "decreased");
	};
	return (
		<CartContext.Provider
			value={{ cart, addToCartHandler, removeFromCartHandler, increaseCartItemHandler, reduceCartItemHandler }}
		>
			<CategoryContext.Provider value={{ categories, categoryHandler }}>
				<Component {...pageProps} />
			</CategoryContext.Provider>
		</CartContext.Provider>
	);
}
