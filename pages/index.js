import React from "react";
import { Layout } from "../layouts";
import { Row, Col, Carousel } from "react-bootstrap";
import { Heading, PreCarousel, CompilationsCarousel, ProductsCarousel, Speaker, ImagesCarousel } from "../components";
const indexPage = props => {
	return (
		<Layout>
			<Row>
				<Col>
					<section>
						<Carousel>
							{getCarouselItems().map(item => {
								return (
									<Carousel.Item key={item.id}>
										<img className="d-block w-100" src={item.img} alt={item.title} />
										<Carousel.Caption>
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</Carousel.Caption>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</section>
				</Col>
			</Row>
			<Row>
				<Col>
					<div>
						<img src="/static/images/main/books/first.png" alt="Электронные и печатные книги" />
					</div>
				</Col>
				<Col>
					<Heading text="книги на любой вкус">Электронные и печатные</Heading>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<PreCarousel>Сборники книг</PreCarousel>
				</Col>
				<Col sm={8}>
					<CompilationsCarousel items={getBookCarouselItems()} />
				</Col>
			</Row>
			<Row>
				<Col>Популярные аудиокниги</Col>
			</Row>
			<Row>
				<Col>
					<ProductsCarousel items={getPopularBooks()} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Heading text="слушайте когда и где угодно">Аудиокниги</Heading>
				</Col>
				<Col>
					<div>
						<img src="/static/images/main/books/second.png" alt="Электронные и печатные книги" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<PreCarousel>Сборники аудиокниг</PreCarousel>
				</Col>
				<Col sm={8}>
					<CompilationsCarousel items={getBookCarouselItems()} />
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className="text-accent">Лучшие спикеры</h3>
				</Col>
			</Row>
			<Row>
				<Col sm={5}>
					<ImagesCarousel items={getSpeakers()} />
				</Col>
				<Col sm={7}>
					<Speaker {...getSpeakers()[0]} />
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className="text-accent">Отзывы пользователей</h3>
				</Col>
			</Row>
		</Layout>
	);
};
const getCarouselItems = () => [
	{
		id: 0,
		img: "/static/images/main/books/carousel1.png",
		title: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
	},
	{
		id: 1,
		img: "/static/images/main/books/carousel1.png",
		title: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
	},
	{
		id: 2,
		img: "/static/images/main/books/carousel1.png",
		title: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
	}
];
const getBookCarouselItems = () => [
	{
		id: 0,
		img: "/static/images/main/books/slider-carousel/1.png",
		text: "ТОП-10 романов"
	},
	{
		id: 1,
		img: "/static/images/main/books/slider-carousel/2.png",
		text: "На досуге"
	},
	{
		id: 2,
		img: "/static/images/main/books/slider-carousel/3.png",
		text: "Бестселлеры"
	}
];
const getPopularBooks = () => [
	{
		id: 0,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 1,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 2,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 3,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 4,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 5,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 6,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 7,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 8,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	}
];
const getSpeakers = () => [
	{
		id: 0,
		img: "/static/images/main/books/person.png",
		name: "Валерия Филиппова",
		role: "Писатель",
		quote:
			"“Скрытый смысл, не учитывая количества слогов, стоящих между ударениями, многопланово аннигилирует былинный реформаторский пафос. Мифопоэтическое пространство вызывает амфибрахий.”"
	},
	{
		id: 1,
		img: "/static/images/main/books/person.png",
		name: "Валерия Леонтьева",
		role: "Спикер",
		quote:
			"“Скрытый умысел, не учитывая количества слогов, стоящих между ударениями, многопланово аннигилирует былинный реформаторский пафос. Мифопоэтическое пространство вызывает амфибрахий.”"
	},
	{
		id: 2,
		img: "/static/images/main/books/person.png",
		name: "Валерия Филиппова",
		role: "Писатель",
		quote:
			"“Скрытый смысл, не учитывая количества слогов, стоящих между ударениями, многопланово аннигилирует былинный реформаторский пафос. Мифопоэтическое пространство вызывает амфибрахий.”"
	}
];
export default indexPage;
