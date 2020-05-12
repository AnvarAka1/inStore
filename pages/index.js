import React, { useState } from "react";
import { useForm, useModal } from "../hooks";
import Link from "next/link";
import { Row, Col, Carousel, Button, Form } from "react-bootstrap";
import {
	Heading,
	PreCarousel,
	CompilationsCarousel,
	ProductsCarousel,
	Speaker,
	ImagesCarousel,
	ReviewsCarousel,
	PopularHeader,
	Modal,
	Card,
	Stars,
	TopImage
} from "../components";
import { FormGroup } from "../components/UI";

const IndexPage = React.memo(props => {
	const [ rate, setRate ] = useState(4);
	const nameControl = useForm();
	const mailControl = useForm();
	const phoneControl = useForm();
	const reviewControl = useForm();

	const speakerModal = useModal();
	const reviewModal = useModal();
	// Functions
	const rateChangedHandler = id => {
		setRate(id);
	};

	const speakerSubmitHandler = event => {
		event.preventDefault();
		// axios;
		console.log("Speaker submitted");
	};

	const reviewSubmitHandler = event => {
		event.preventDefault();
		console.log("Review submitted");
	};
	const speakerCard = (
		<Card>
			<Card.Header>Стать спикером</Card.Header>
			<Card.Body>
				<Form onSubmit={speakerSubmitHandler}>
					<FormGroup placeholder="Ф.И.О" control={nameControl}>
						Ф.И.О
					</FormGroup>
					<FormGroup placeholder="example@mail.com" control={mailControl}>
						Эл. почта
					</FormGroup>
					<FormGroup placeholder="+998 (__) ___ - __ - __" control={phoneControl}>
						Номер телефона
					</FormGroup>
					<Button type="submit">Отправить</Button>
				</Form>
			</Card.Body>
		</Card>
	);

	const reviewCard = (
		<Card>
			<Card.Header>Оставить отзыв</Card.Header>
			<Card.Body>
				<Form onSubmit={reviewSubmitHandler}>
					<Form.Group>
						<Form.Label>Ваша оценка</Form.Label>
						<Stars isBig onClick={rateChangedHandler} rate={rate} />
					</Form.Group>
					<FormGroup
						as="textarea"
						placeholder="Напишите тут (максимум 1000 символов)"
						size="sm"
						control={reviewControl}
					>
						Ваш отзыв
					</FormGroup>

					<Button type="submit">Оставить отзыв</Button>
				</Form>
			</Card.Body>
		</Card>
	);
	return (
		<React.Fragment>
			<Modal modal={speakerModal}>{speakerCard}</Modal>
			<Modal modal={reviewModal}>{reviewCard}</Modal>
			<Row className="mb-4">
				<Col>
					<section>
						<TopImage
							title="Электронные книги и Видео уроки"
							img="/static/images/main/books/carousel1.png"
							link="/"
						/>
					</section>
					{/* <section>
						<Carousel>
							{getCarouselItems().map(item => {
								return (
									<Carousel.Item key={item.id}>
										<img className="d-block w-100" src={item.img} alt={item.title} />
										<Carousel.Caption>
											<h3>{item.title}</h3>
										</Carousel.Caption>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</section> */}
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
			<Row className="mt-4 mb-4 pt-4 pb-4">
				<Col sm={4}>
					<PreCarousel link="/#">Сборники книг</PreCarousel>
				</Col>
				<Col sm={8}>
					<CompilationsCarousel items={getBookCarouselItems()} />
				</Col>
			</Row>
			<Row>
				<Col>
					<PopularHeader link="/books/popular">книги</PopularHeader>
				</Col>
			</Row>
			<Row>
				<Col>
					<ProductsCarousel items={getPopularBooks()} />
				</Col>
			</Row>
			<Row className="mt-5 pt-4 mb-5 pb-4">
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
					<PreCarousel link="/#">Сборники аудиокниг</PreCarousel>
				</Col>
				<Col sm={8}>
					<CompilationsCarousel items={getBookCarouselItems()} />
				</Col>
			</Row>
			<Row className="mt-5 pt-4">
				<Col>
					<PopularHeader link="/audio/popular">аудиокниги</PopularHeader>
				</Col>
			</Row>
			<Row>
				<Col>
					<ProductsCarousel items={getPopularBooks()} />
				</Col>
			</Row>
			<Row className="mb-4  mt-5 pt-3">
				<Col>
					<h3 className="text-accent">Лучшие спикеры</h3>
				</Col>
			</Row>
			<Row>
				<Col sm={5}>
					<ImagesCarousel items={getSpeakers()} />
				</Col>
				<Col sm={7}>
					<Speaker onClick={speakerModal.onShow} {...getSpeakers()[0]} />
				</Col>
			</Row>
			<Row className="mb-4  mt-5 pt-3">
				<Col>
					<h3 className="text-accent">Отзывы пользователей</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<ReviewsCarousel items={getReviewsItems()} />
				</Col>
			</Row>
			<Row className="mt-3 mb-5 pb-4">
				<Col>
					<div className="text-center">
						<Button onClick={reviewModal.onShow}>Оставить отзыв</Button>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
});

const getCarouselItems = () => [
	{
		id: 0,
		img: "/static/images/main/books/carousel1.png",
		title: "Электронные книги и Видео уроки"
		// text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
	},
	{
		id: 1,
		img: "/static/images/main/books/carousel1.png",
		title: "Электронные книги и Видео уроки"
		// text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
	},
	{
		id: 2,
		img: "/static/images/main/books/carousel1.png",
		title: "Электронные книги и Видео уроки"
		// text: "Nulla vitae elit libero, a pharetra augue mollis interdum"
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
		rate: 3,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 1,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 1,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 2,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 3,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 0,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 4,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 5,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 6,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 7,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 5,
		currentPrice: "39 500 сум",
		price: "55 500 сум"
	},
	{
		id: 8,
		img: "/static/images/items/books/1.png",
		title: "Нескучные десерты",
		author: "Истомин Виталий",
		rate: 4,
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
const getReviewsItems = () => [
	{
		id: 0,
		img: "/static/images/main/books/person.png",
		name: "Антон Алексеев",
		rate: 4,
		text:
			"“Не все рецепты точны и выверены, но Виталию можно прощать ошибочки почти бесконечно! Обожаю его и его рецепты.”"
	},
	{
		id: 1,
		img: "/static/images/main/books/person.png",
		name: "Антон Алексеев",
		rate: 4,
		text:
			"“Не все рецепты точны и выверены, но Виталию можно прощать ошибочки почти бесконечно! Обожаю его и его рецепты.”"
	},
	{
		id: 2,
		img: "/static/images/main/books/person.png",
		name: "Антон Алексеев",
		rate: 4,
		text:
			"“Не все рецепты точны и выверены, но Виталию можно прощать ошибочки почти бесконечно! Обожаю его и его рецепты.”"
	},
	{
		id: 3,
		img: "/static/images/main/books/person.png",
		name: "Антон Алексеев",
		rate: 4,
		text:
			"“Не все рецепты точны и выверены, но Виталию можно прощать ошибочки почти бесконечно! Обожаю его и его рецепты.”"
	}
];
export default IndexPage;
