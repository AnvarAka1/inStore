import React from "react";
import { Row, Col } from "react-bootstrap";
import { Categories } from "../components/";
const CategoriesLayout = props => {
	return (
		<Row>
			<Col sm={3}>
				<Categories items={getStaticCats()} isStatic={true} />
				<Categories items={getCategoryItems()} />
			</Col>
			<Col sm={9}>{props.children}</Col>
		</Row>
	);
};
const getStaticCats = () => [
	{
		id: 0,
		title: "Все",
		icon: "/images/icons/all.png"
	},
	{
		id: 1,
		title: "Сборники",
		icon: "/images/icons/compilations.png"
	},
	{
		id: 2,
		title: "Аудиокниги",
		icon: "/images/icons/audio.png"
	},
	{
		id: 3,
		title: "Печатные книги",
		icon: "/images/icons/book.png"
	},
	{
		id: 4,
		title: "Электронные книги",
		icon: "/images/icons/pdf.png"
	}
];
const getCategoryItems = () => [
	{
		id: 0,
		title: "Деловая литература"
	},
	{
		id: 1,
		title: "Детективы и Триллеры"
	},
	{
		id: 2,
		title: "Документальная литература"
	},
	{
		id: 3,
		title: "Дом, ремесла, досуг, хобби"
	},
	{
		id: 4,
		title: "Драматургия"
	},
	{
		id: 5,
		title: "Искусство, Искусствоведение, Дизайн"
	},
	{
		id: 6,
		title: "Компьютеры и Интернет"
	},
	{
		id: 7,
		title: "Литература для детей"
	},
	{
		id: 8,
		title: "Любовные романы"
	},
	{
		id: 9,
		title: "Наука, Образование"
	},
	{
		id: 10,
		title: "Поэзия"
	},
	{
		id: 11,
		title: "Приключения"
	},
	{
		id: 12,
		title: "Проза"
	},
	{
		id: 13,
		title: "Прочее"
	},
	{
		id: 14,
		title: "Религия, духовность, эзотерика"
	},
	{
		id: 15,
		title: "Справочная литература"
	},
	{
		id: 16,
		title: "Старинное"
	}
];

export default CategoriesLayout;
