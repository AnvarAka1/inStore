import React from "react";
import classes from "./AuthModal.module.scss";
import { Modal, Card } from "../";

import { FormGroup } from "../UI";
import { Button, Form, Row, Col } from "react-bootstrap";
const authModal = ({ modal, onHide, isSignUp, modeHandler, controls, submitted }) => {
	const title = <h2>{isSignUp ? "Регистрация" : "Авторизация"}</h2>;
	const text = isSignUp ? (
		<p>
			У вас имеется аккаунт?{" "}
			<span className="text-accent" onClick={() => modeHandler(false)}>
				Войдите
			</span>
		</p>
	) : (
		<p>
			У вас еще нет аккаунта? Пройдите{" "}
			<span className="text-accent" onClick={() => modeHandler(true)}>
				Регистрацию
			</span>
		</p>
	);

	console.log(controls);
	const form = controls[+isSignUp].map((control, index) => {
		console.log(control);
		return (
			<FormGroup key={index} control={control}>
				{control.options.label}
			</FormGroup>
		);
	});

	return (
		<Modal modal={modal} onHide={onHide}>
			<Card>
				<Card.Body>
					<Row>
						<Col sm={6}>
							{title}
							{text}
							<div>
								<Form onSubmit={submitted}>
									{form}
									<Button type="submit">{isSignUp ? "Зарегистрироваться" : "Войти"}</Button>
								</Form>
								<div className={classes.Social}>{/*  */}</div>
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Modal>
	);
};

export default authModal;
