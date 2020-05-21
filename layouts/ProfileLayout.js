import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavigationItems } from "../components/";
const ProfileLayout = ({ children, lang }) => {
	lang = lang || 0;
	return (
		<Row>
			<Col sm={3}>
				<NavigationItems lang={lang} items={getNavigationItems()} />
			</Col>
			<Col sm={9}>{children}</Col>
		</Row>
	);
};

const getNavigationItems = () => [
	{
		id: 0,
		icon: "/images/icons/story.png",
		titles: [ "История заказов", "Order history", "Uzb" ],
		href: "/profile/orders"
	},

	{
		id: 1,
		icon: "/images/icons/book.png",
		titles: [ "Моя библиотека", "My library", "Uzb" ],
		href: "/profile/library"
	},
	{
		id: 2,
		icon: "/images/icons/star.png",
		titles: [ "Избанные", "Favourites", "Uzb" ],
		href: "/profile/favourites"
	},
	{
		id: 3,
		icon: "/images/icons/cart.png",
		titles: [ "Корзина", "Cart", "Uzb" ],
		href: "/cart"
	},
	{
		id: 4,
		icon: "/images/icons/settings.png",
		titles: [ "Настройки", "Settings", "Uzb" ],
		href: "/profile/settings",
		className: "mt-auto"
	}
];
export default ProfileLayout;
