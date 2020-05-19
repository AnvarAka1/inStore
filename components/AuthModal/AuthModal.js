import React from "react";
import classes from "./AuthModal.module.scss";
import Link from "next/link";
import { Modal, Card } from "../";
import { FormikGroup } from "../UI";
import { Button, FormCheck, FormGroup } from "react-bootstrap";
import InputMask from "react-input-mask";
import { Form, Formik, ErrorMessage } from "formik";
import { string, object } from "yup";
const authModal = ({ modal, onHide, isSignUp, modeHandler, showInputMask, checkboxControl, onAuth }) => {
	const titles = [ "Авторизация", "Регистрация" ];
	const texts = [ "У вас еще нет аккаунта? Пройдите ", "У вас имеется аккаунт? " ];
	const actions = [ "Регистрацию", "Войдите" ];
	const text = (
		<p className="text-small">
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
			key={0}
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
				phone: string().required(),
				fPassword: string().min(6).max(20).required(),
				sPassword: string().min(6).max(20).required()
			})}
			onSubmit={values => {
				onAuth(values.name, values.email, values.phone, values.fPassword, isSignUp);
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
						<FormGroup>
							<InputMask
								className="form-control form-control-sm mt-3"
								mask="+\9\98 (99) 999-99-99"
								name="phone"
								placeholder="+998 (__) ___-__-__"
								alwaysShowMask={true}
								value={register.getFieldProps("phone").value}
								onChange={register.getFieldProps("phone").onChange}
							/>
							<span className="text-danger text-small">
								<ErrorMessage name="phone" />
							</span>
						</FormGroup>
					)}
					<FormikGroup name="fPassword" {...register.getFieldProps("fPassword")} type="password" size="sm">
						Введите пароль
					</FormikGroup>
					<FormikGroup name="sPassword" {...register.getFieldProps("sPassword")} type="password" size="sm">
						Подтвердите пароль
					</FormikGroup>
					<Button type="submit" className="float-right" disabled={register.isSubmitting}>
						Зарегистрироваться
					</Button>
				</Form>
			)}
		</Formik>
	) : (
		<Formik
			key={1}
			initialValues={{
				emailPhone: "",
				password: "",
				checkbox: ""
			}}
			validationSchema={object({
				emailPhone: string().min(6, "Слишком мало символов").required("Введите email или номер телефона"),
				password: string()
					.min(6, "Пароль должен содержать минимум 6 символов")
					.max(20, "Пароль должен содержать максимум 20 символов")
					.required("Введите пароль")
			})}
			onSubmit={(values, { setSubmitting }) => {
				onAuth(null, values.emailPhone, null, values.password, isSignUp);
			}}
		>
			{login => (
				<Form onSubmit={login.handleSubmit}>
					<FormikGroup name="emailPhone" {...login.getFieldProps("emailPhone")} size="sm">
						Электронная почта или номер телефона
					</FormikGroup>
					<FormikGroup name="password" {...login.getFieldProps("password")} type="password" size="sm">
						Введите пароль
					</FormikGroup>

					<FormCheck
						type="checkbox"
						label="Запомнить пароль"
						value={checkboxControl.value}
						onChange={checkboxControl.onChange}
					/>

					<Button type="submit" className="float-right" disabled={login.isSubmitting}>
						Войти
					</Button>
					<Link href="/">
						<a className="text-small">Не можете получить доступ?</a>
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
						<div className="w-100 pl-2 pr-4">
							<h2>{titles[+isSignUp]}</h2>
							{text}
							{form}
						</div>
						<div className={`${classes.Social} pl-4 pr-2 w-100`}>
							<p className="text-small text-bold mb-3">
								{isSignUp ? "Регистрация" : "Авторизация"} через:
							</p>
							<Button className="w-100 text-small" variant="primary" onClick={null}>
								<strong>Facebook</strong>
							</Button>
							<Button className="w-100 mt-2 text-small" variant="danger" onClick={null}>
								<strong>Google</strong>
							</Button>
							<Button className="w-100 mt-2 text-small text-white" variant="warning" onClick={null}>
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
