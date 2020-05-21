import React, { useState } from "react";
import axios from "../axios-api";
import { useForm, useModal } from "../hooks";
import { parseCookies } from "../helpers/utils";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Row, Col, Carousel, Button, Form as BootstrapForm } from "react-bootstrap";
import {
	Heading,
	PreCarousel,
	CompilationsCarousel,
	ProductsCarousel,
	ReviewsCarousel,
	NewHeader,
	Modal,
	Card,
	Stars
} from "../components";
import { FormikGroup } from "../components/UI";

const LandingPage = ({ feedback, books, audioBooks, bookCollections, audioCollections, speakers, lang }) => {
	const [ loading, setLoading ] = useState(false);
	const [ rate, setRate ] = useState(4);
	const reviewControl = useForm();
	const reviewModal = useModal();

	const rateChangedHandler = id => {
		setRate(id + 1);
	};
	const reviewSubmitHandler = text => {
		const formData = new FormData();
		formData.append("text", text);
		formData.append("rate", rate);
		axios
			.post("/feedback", formData, {
				headers: {
					Authorization: `Bearer ${parseCookies(null).token}`
				}
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	//  JSX

	// multilang
	lang = lang || 1;
	const content = {
		eBook: {
			titles: [ "Электронные и печатные", "Printed and e-books", "Uzb" ],
			texts: [ "книги на любой вкус", "for any taste", "Uzb" ]
		},

		booksCompilations: [ "Сборники книг", "Books compilation", "Uzb" ],

		newBooks: [ "книги", "books", "Uzb" ],
		audiobook: {
			titles: [ "Аудиокниги", "Audiobooks", "Uzb" ],
			texts: [ "слушайте когда и где угодно", "Listen whenever and wherever you are", "Uzb" ]
		},
		audiobooksCompilations: [ "Сборники аудиокниг", "Audiobooks compilation", "Uzb" ],

		newAudiobooks: [ "Новые аудиокниги", "New audiobooks", "Uzb" ],
		review: {
			headers: [ "Отзывы пользователей", "Users' reviews", "Uzb" ],
			leaveReviews: [ "Оставить отзыв", "Leave review", "Uzb" ],
			ratings: [ "Ваша оценка", "Your rate", "Uzb" ],
			reviews: [ "Ваш отзыв", "Your review", "Uzb" ]
		}
	};
	const reviewCard = (
		<Card>
			<Card.Header>{content.review.leaveReviews[lang]}</Card.Header>
			<Card.Body>
				<Formik
					initialValues={{
						text: ""
					}}
					validationSchema={object({
						text: string().max(1000).required()
					})}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting();
						reviewSubmitHandler(values.text).then(res => {}).catch(err => console.log(err)).finally(() => {
							setSubmitting(false);
						});
					}}
				>
					{formik => (
						<Form onSubmit={formik.handleSubmit}>
							<BootstrapForm.Group>
								<BootstrapForm.Label>{content.review.ratings[lang]}</BootstrapForm.Label>
								<Stars isBig onClick={rateChangedHandler} rate={rate} />
							</BootstrapForm.Group>
							<FormikGroup
								as="textarea"
								placeholder="Напишите тут (максимум 1000 символов)"
								size="sm"
								{...formik.getFieldProps("text")}
							>
								{content.review.reviews[lang]}
							</FormikGroup>

							<Button type="submit">{content.review.leaveReviews[lang]}</Button>
						</Form>
					)}
				</Formik>
			</Card.Body>
		</Card>
	);
	return (
		<React.Fragment>
			<Modal modal={reviewModal}>{reviewCard}</Modal>
			<Row className="mb-4">
				<Col>
					<section>
						<Carousel>
							{getCarouselItems().map(item => {
								return (
									<Carousel.Item key={item.id}>
										<img className="d-block w-100" src={item.img} alt={item.titles[lang]} />
										<Carousel.Caption>
											<h3>{item.titles[lang]}</h3>
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
						<img src="/images/main/books/first.png" alt="Электронные и печатные книги" />
					</div>
				</Col>
				<Col>
					<Heading text={content.eBook.titles[lang]} lang={lang} href="/books/categories">
						{content.eBook.titles[lang]}
					</Heading>
				</Col>
			</Row>
			<Row className="mt-4 mb-4 pt-4 pb-4">
				<Col sm={4}>
					<PreCarousel link="/books/categories/compilations">{content.booksCompilations[lang]}</PreCarousel>
				</Col>
				<Col sm={8}>{!loading && <CompilationsCarousel lang={lang} items={bookCollections} />}</Col>
			</Row>
			<Row>
				<Col>
					<NewHeader href="/books/categories" lang={lang}>
						{content.newBooks[lang]}
					</NewHeader>
				</Col>
			</Row>
			<Row>
				<Col>{!loading && <ProductsCarousel items={books} lang={lang} />}</Col>
			</Row>
			<Row className="mt-5 pt-4 mb-5 pb-4">
				<Col>
					<Heading lang={lang} text={content.audiobook.texts[lang]} href="/books/categories/audio-books">
						{content.audiobook.titles[lang]}
					</Heading>
				</Col>
				<Col>
					<div>
						<img src="/images/main/books/second.png" alt="Электронные и печатные книги" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<PreCarousel link="/books/categories/compilations">
						{content.audiobooksCompilations[lang]}
					</PreCarousel>
				</Col>
				<Col sm={8}>{!loading && <CompilationsCarousel lang={lang} items={audioCollections} />}</Col>
			</Row>
			<Row className="mt-5 pt-4">
				<Col>
					<NewHeader href="/books/categories/audio-books" lang={lang}>
						{content.newAudiobooks[lang]}
					</NewHeader>
				</Col>
			</Row>
			<Row>
				<Col>{!loading && <ProductsCarousel items={audioBooks} lang={lang} />}</Col>
			</Row>
			<Row className="mb-4  mt-5 pt-3">
				<Col>
					<h3 className="text-accent">{content.review.headers[lang]}</h3>
				</Col>
			</Row>
			<Row>
				<Col>{!loading && <ReviewsCarousel items={feedback} />}</Col>
			</Row>
			<Row className="mt-3 mb-5 pb-4">
				<Col>
					<div className="text-center">
						<Button onClick={reviewModal.onShow}>{content.review.reviews[lang]}</Button>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
};
const getCarouselItems = () => [
	{
		id: 0,
		titles: [ "Электронные книги и Видео уроки", "E-books and Videolessons", "Uzb" ],
		img: "/images/main/books/carousel1.png",
		link: "/"
	},

	{
		id: 1,
		titles: [ "Электронные книги и Видео уроки", "E-books and Videolessons", "Uzb" ],
		img: "/images/main/books/carousel1.png",
		link: "/"
	}
];
export const getServerSideProps = async ctx => {
	const res = await axios.get("home");
	const { feedback, books, audio_books, book_collections, audio_book_collections, speakers } = res.data;

	return {
		props: {
			feedback,
			books,
			audioBooks: audio_books,
			bookCollections: book_collections,
			audioCollections: audio_book_collections,
			speakers
		}
	};
};
export default React.memo(LandingPage);
