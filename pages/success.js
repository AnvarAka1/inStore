import React, { useState, useContext, useEffect } from "react";
import {CartContext, LangContext} from "../store";
import Router from "next/router";
const SuccessPage = () => {
	const [count, setCount] = useState(2);
	const langContext = useContext(LangContext);
	const cartContext = useContext(CartContext)
	useEffect(() => {
		cartContext.onClearCart();
		if (count <= 1) {
			Router.replace("/profile/library?l=" + langContext.lang);
		}
		const timeout = setTimeout(() => {
			setCount(count - 1);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [count]);
	const content = {
		messages: [
			"Оплата совершена успешно! Перенаправление через ",
			"Successfully purchased! Redirect in ",
			"To'lov muvaffaqiyatli yakunlandi! Qayta yo'naltirish "
		]
	};
	return (
		<div>
			<h1 className="text-center mt-5">
				{content.messages[langContext.lang]} {count}
			</h1>
		</div>
	);
};

export default SuccessPage;
