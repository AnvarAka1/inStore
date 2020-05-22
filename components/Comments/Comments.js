import React from "react";
import { Form, Button } from "react-bootstrap";

import classes from "./Comments.module.scss";
import Comment from "./Comment/Comment";
import { Stars } from "../";
const comments = ({ items, rate, commentControl, isAuthorized, rateClicked, onSubmit, onAuth, lang }) => {
	const content = {
		reviews: [ "Оставить отзыв", "Leave review", "Uzb" ],
		send: [ "Отправить", "Submit", "Uzb" ],
		unAuth: [
			"Отзыв могут отправить авторизованные пользователи.",
			"Only authorized users can leave reviews",
			"Uzb"
		],
		auth: [ "Пройти АВТОРИЗАЦИЮ", "Login", "Uzb" ],
		noReviews: [ "Пока нет отзывов", "No reviews yet", "Uzb" ]
	};
	const commentsView = items.map(item => <Comment key={item.id} {...item} />);
	return (
		<React.Fragment>
			<h2 className="mt-5 mb-2">{content.reviews[lang]}</h2>
			{isAuthorized ? (
				<Form onSubmit={onSubmit}>
					<Form.Control
						as="textarea"
						value={commentControl.value}
						onChange={commentControl.onChange}
						placeholder="Ваш отзыв"
					/>
					<div className="d-flex justify-content-between align-items-center mt-2">
						<Stars rate={rate} isBig onClick={rateClicked} />
						<Button type="submit" className="text-small">
							{content.send[lang]}
						</Button>
					</div>
				</Form>
			) : (
				<div className="mt-4">
					{content.unAuth[lang]} <br />
					<span className="text-accent text-bold" style={{ cursor: "pointer" }} onClick={onAuth}>
						{content.auth[lang]}
					</span>
				</div>
			)}

			<h3 className="mt-4">Отзывы</h3>
			{items.length ? (
				<ul className={`${classes.Comments} ${items.length > 20 && classes.BottomBox}`}>{commentsView}</ul>
			) : (
				<p className="text-secondary">{content.noReviews[lang]}</p>
			)}
		</React.Fragment>
	);
};

export default comments;
