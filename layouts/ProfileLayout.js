import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavigationItems } from "../components/";
const ProfileLayout = props => {
	return (
		<Row>
			<Col sm={3}>
				<NavigationItems items={getNavigationItems()} />
			</Col>
			<Col sm={9}>{props.children}</Col>
		</Row>
	);
};

const getNavigationItems = () => [
	{
		id: 0,
		icon: "/static/images/icons/story.png",
		title: "История заказов: 29",
		href: "/profile/orders"
	},
	{
		id: 1,
		icon: "/static/images/icons/video.png",
		title: "Видеоуроки: 19",
		href: "/profile/videolessons"
	},
	{
		id: 2,
		icon: "/static/images/icons/book.png",
		title: "Моя библиотека: 10",
		href: "/profile/library"
	},
	{
		id: 3,
		icon: "/static/images/icons/star.png",
		title: "Избанные: 4",
		href: "/profile/favourite"
	},
	{
		id: 4,
		icon: "/static/images/icons/cart.png",
		title: "Корзина: 3",
		href: "/cart"
	},
	{
		id: 5,
		icon: "/static/images/icons/settings.png",
		title: "Настройки",
		href: "/profile/settings",
		className: "mt-auto"
	}
];
export default ProfileLayout;
