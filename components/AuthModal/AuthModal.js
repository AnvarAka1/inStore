import React from "react";
import classes from "./AuthModal.module.scss";
import Link from "next/link";
import { Modal, Card } from "../";
import { FormikGroup } from "../UI";
import { Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import { Form, Formik } from "formik";
import { string, object } from "yup";
const authModal = ({ modal, onHide, isSignUp, modeHandler, showInputMask, checkboxControl, onAuth }) => {
	const titles = [ "Авторизация", "Регистрация" ];
	const texts = [ "У вас еще нет аккаунта? Пройдите ", "У вас имеется аккаунт? " ];
	const actions = [ "Регистрацию", "Войдите" ];
	const text = (
		<p>
			{texts[+isSignUp]}
			<span
				className="text-accent"
				style={{ cursor: "pointer" }}
				onClick={() => modeHandler(isSignUp ? false : true)}
			>
				{actions[+isSignUp]}
			</span>
		</p>
	);
	const form = isSignUp ? (
		<Formik
			initialValues={{
				name: "",
				email: "",
				phone: "",
				fPassword: "",
				sPassword: ""
			}}
			validationSchema={object({
				name: string().min(2).required(),
				email: string().email().min(4).required(),
				phone: string().min(9).max(9).required(),
				fPassword: string().min(6).max(20).required(),
				sPassword: string().min(6).max(20).required()
			})}
			onSubmit={(values, { setSubmitting }) => {
				onAuth(values.name, values.email, values.phone, values.fPassword, isSignUp)
					.then(res => {})
					.catch(err => {
						console.log(err);
					})
					.finally(() => {
						setSubmitting(false);
					});
			}}
		>
			{register => (
				<Form onSubmit={register.handleSubmit}>
					<FormikGroup name="name" {...register.getFieldProps("name")} size="sm">
						Ф.И.О
					</FormikGroup>
					<FormikGroup name="email" {...register.getFieldProps("email")} size="sm">
						Эл. почта
					</FormikGroup>
					{showInputMask && (
						<InputMask
							className="form-control form-control-sm mt-3"
							mask="+\9\98 (99) 999-99-99"
							name="phone"
							placeholder="+998 (__) ___-__-__"
							alwaysShowMask={true}
							value={register.getFieldProps("phone").value}
							onChange={register.getFieldProps("phone").onChange}
						/>
					)}
					<FormikGroup name="fPassword" {...register.getFieldProps("fPassword")} size="sm">
						Введите пароль
					</FormikGroup>
					<FormikGroup name="sPassword" {...register.getFieldProps("sPassword")} size="sm">
						Подтвердите пароль
					</FormikGroup>
					<Button type="submit" className="float-right" disabled={login.isSubmitting}>
						Зарегистрироваться
					</Button>
				</Form>
			)}
		</Formik>
	) : (
		<Formik
			initialValues={{
				emailPhone: "",
				password: "",
				checkbox: ""
			}}
			validationSchema={object({
				emailPhone: string().min(2).required(),
				password: string().email().min(4).required(),
				checkbox: string().min(9).max(9).required()
			})}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				onAuth(null, values.emailPhone, null, values.password, isSignUp)
					.then(res => {})
					.catch(err => {
						console.log(err);
					})
					.finally(() => {
						setSubmitting(false);
					});
			}}
		>
			{login => (
				<Form onSubmit={login.handleSubmit}>
					<FormikGroup name="email" {...login.getFieldProps("email")} size="sm">
						Электронная почта или номер телефона
					</FormikGroup>
					<FormikGroup name="password" {...login.getFieldProps("password")} size="sm">
						Введите пароль
					</FormikGroup>
					<FormGroup controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Запомнить пароль"
							value={checkboxControl.value}
							onChange={checkboxControl.onChange}
						/>
					</FormGroup>
					<Button type="submit" className="float-right" disabled={login.isSubmitting}>
						Войти
					</Button>
					<Link href="/">
						<a>Не можете получить доступ?</a>
					</Link>
				</Form>
			)}
		</Formik>
	);
	return (
		<Modal modal={modal} size="lg" onHide={onHide}>
			<Card>
				<Card.Body>
					<div className="d-flex align-items-center ">
						<div className="w-100">
							<h2>{titles[+isSignUp]}</h2>
							{text}
							{form}
						</div>
						<div className={`${classes.Social} w-100`}>
							<p className="text-small">{isSignUp ? "Регистрация" : "Авторизация"} через:</p>
							<Button variant="primary" onClick={null}>
								<strong>Facebook</strong>
							</Button>
							<Button variant="danger" onClick={null}>
								<strong>Google</strong>
							</Button>
							<Button variant="warning" onClick={null}>
								<strong>Одноклассники</strong>
							</Button>
						</div>
					</div>
				</Card.Body>
			</Card>
		</Modal>
	);
};

export default authModal;
