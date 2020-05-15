import React from "react";
import classes from "./AuthModal.module.scss";
import Link from "next/link";
import { Modal, Card } from "../";

import { FormGroup } from "../UI";
import { Button, Form } from "react-bootstrap";
const authModal = ({ modal, onHide, isSignUp, modeHandler, controls, submitted, checkboxControl }) => {
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

	const form = controls[+isSignUp].map((control, index) => {
		return (
			<FormGroup key={index} control={control}>
				{control.options.label}
			</FormGroup>
		);
	});

	return (
		<Modal modal={modal} size="lg" onHide={onHide}>
			<Card>
				<Card.Body>
					<div className="d-flex align-items-center ">
						<div className="w-100">
							{title}
							{text}
							<div>
								<Form onSubmit={submitted}>
									{form}
									{!isSignUp && (
										<Form.Group controlId="formBasicCheckbox">
											<Form.Check
												type="checkbox"
												label="Запомнить пароль"
												value={checkboxControl.value}
												onChange={checkboxControl.onChange}
											/>
										</Form.Group>
									)}
									<Button type="submit" className="float-right">
										{isSignUp ? "Зарегистрироваться" : "Войти"}
									</Button>
									{!isSignUp && (
										<Link href="/">
											<a>Не можете получить доступ?</a>
										</Link>
									)}
								</Form>
							</div>
						</div>
						<div className={`${classes.Social} w-100`}>
							<p className="text-small">{isSignUp ? "Регистрация" : "Авторизация"} через:</p>
						</div>
					</div>
				</Card.Body>
			</Card>
		</Modal>
	);
};

export default authModal;
