import React from "react";
import { Layout } from "../layouts";
import { Row, Col, Carousel } from "react-bootstrap";
import { Heading, PreCarousel, SliderCarousel, Compilations } from "../components";
const indexPage = props => {
	return (
		<Layout>
			<Row>
				<Col>
					<section>
						<Carousel>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/static/images/main/books/carousel1.png"
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/static/images/main/books/carousel1.png"
									alt="Third slide"
								/>

								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/static/images/main/books/carousel1.png"
									alt="Third slide"
								/>

								<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
								</Carousel.Caption>
							</Carousel.Item>
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
					<PreCarousel>Сборники аудиокниг</PreCarousel>
				</Col>
				<Col sm={8}>
					<SliderCarousel items={<Compilations items={getBookCarouselItems()} />} />
				</Col>
			</Row>
			<Row>
				<Col>Популярные книги</Col>
			</Row>
			<Row>
				<Col>{/* <SliderCarousel items={getPopularBooks()} /> */}</Col>
			</Row>
		</Layout>
	);
};
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
	}
];
export default indexPage;
