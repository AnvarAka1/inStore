import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { NavigationItems } from "../components/";
import { LangContext } from "../store/";
import { parseCookies } from "../helpers/utils";
import axios from "../axios-api";
const ProfileLayout = ({ children }) => {
	const [navigationItems, setNavigationItems] = useState([]);
	const langContext = useContext(LangContext);

	useEffect(() => {
		axios
			.get("ru/profile/info", {
				headers: {
					Authorization: `Bearer ${parseCookies(null).token}`
				}
			})
			.then(res => {
				let finalArray = [];
				const array = [];
				for (let key in res.data) {
					array.push({ key, data: res.data[key] });
				}
				for (let element of array) {
					finalArray = getNavigationItems().map(el => {
						if (element.key === el.key)
							return {
								...el,
								count: element.data,
								href: el.href + "?l=" + langContext.lang
							};
						return { ...el, href: el.href + "?l=" + langContext.lang };
					});
				}
				setNavigationItems(finalArray);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {});
	}, []);

	return (
		<Row>
			<Col sm={3}>
				<NavigationItems lang={langContext.lang} items={navigationItems} />
			</Col>
			<Col sm={9}>{children}</Col>
		</Row>
	);
};

const getNavigationItems = () => [
	{
		id: 0,
		key: "orders",
		icon: "/images/icons/story.png",
		titles: ["История заказов", "Order history", "Uzb"],
		count: 0,
		href: "/profile/orders"
	},

	{
		id: 1,
		key: "library",
		icon: "/images/icons/book.png",
		titles: ["Моя библиотека", "My library", "Uzb"],
		count: 0,
		href: "/profile/library"
	},
	{
		id: 2,
		key: "favourites",
		icon: "/images/icons/star.png",
		titles: ["Избранные", "Favourites", "Uzb"],
		count: 0,
		href: "/profile/favourites"
	},
	{
		id: 3,
		key: "cart",
		icon: "/images/icons/cart.png",
		titles: ["Корзина", "Cart", "Uzb"],
		count: 0,
		href: "/cart"
	},
	{
		id: 4,
		icon: "/images/icons/settings.png",
		titles: ["Настройки", "Settings", "Uzb"],
		href: "/profile/settings",
		count: null,
		className: "mt-auto"
	}
];
export default ProfileLayout;
