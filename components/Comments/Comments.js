import React from "react";
import { Form, Button } from "react-bootstrap";

import classes from "./Comments.module.scss";
import Comment from "./Comment/Comment";
import { Stars } from "../";
const comments = ({ items, rate, commentControl, isAuthorized, rateClicked, onSubmit }) => {
	const commentsView = items.map(item => {
		return <Comment key={item.id} {...item} />;
	});
	return (
		<React.Fragment>
			<h2>Оставить отзыв</h2>
			{isAuthorized ? (
				<Form onSubmit={onSubmit}>
					<Form.Control
						as="textarea"
						value={commentControl.value}
						onChange={commentControl.onChange}
						placeholder="Ваш отзыв"
					/>
					<div className="d-flex justify-content-between align-items-end">
						<Stars rate={rate} isBig onClick={rateClicked} />
						<Button type="submit">Отправить</Button>
					</div>
				</Form>
			) : (
				<React.Fragment>
					Отзыв могут отправить авторизованные пользователи. <br />Пройти {" "}
					<span className="text-accent text-bold" onClick={null}>
						АВТОРИЗАЦИЮ
					</span>
				</React.Fragment>
			)}

			<h3>Отзывы</h3>
			<ul className={classes.Comments}>{commentsView}</ul>
		</React.Fragment>
	);
};

export default comments;
