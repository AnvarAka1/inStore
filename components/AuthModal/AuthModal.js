import React from "react";
import classes from "./AuthModal.module.scss";
import Link from "next/link";
import { Modal, Card } from "../";
import { FormikGroup } from "../UI";
import { Button, FormCheck, FormGroup, FormLabel } from "react-bootstrap";
import InputMask from "react-input-mask";
import { Form, Formik, ErrorMessage } from "formik";
import { string, object } from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faVk, faGoogle } from "@fortawesome/free-brands-svg-icons";
const authModal = ({ modal, onHide, isSignUp, modeHandler, showInputMask, checkboxControl, onAuth, lang = 0 }) => {
	const content = {
		login: [ "Войти", "Login", "Kirish" ],
		register: [ "Регистрация", "Register", "Uzb" ],
		regForm: {
			titles: [ "Зарегистрируйтесь через социальные сети", "Register via social media", "Uzb" ],
			fios: [ "Ф.И.О", "Full name", "Uzb" ],
			phones: [ "Номер телефона", "Phone number", "Uzb" ],
			fPasswords: [ "Введите пароль", "Enter password", "Uzb" ],
			sPasswords: [ "Подтвердите пароль", "Confirm password", "Uzb" ],
			buttons: [ "Зарегистрироваться", "Register", "Uzb" ]
		},
		loginForm: {
			titles: [ "Войдите через социальные сети", "Login via social media", "Uzb" ],
			emails: [ "Электронная почта или номер телефона", "Email or phone number", "Uzb" ],
			passwords: [ "Введите пароль", "Enter password", "Uzb" ],
			buttons: [ "Войти", "Login", "Uzb" ],
			accesses: [ "Не можете получить доступ?", "Can't access?", "Uzb" ],
			rememberPasswords: [ "Запомнить пароль", "Remember password", "Uzb" ]
		}
	};

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
					<FormikGroup name="name" {...register.getFieldProps("name")} size="md">
						{content.regForm.fios[lang]}
					</FormikGroup>
					<FormikGroup name="email" {...register.getFieldProps("email")} size="md">
						Email
					</FormikGroup>
					{showInputMask && (
						<FormGroup>
							<FormLabel>{content.regForm.phones[lang]}</FormLabel>
							<InputMask
								className="form-control form-control-md"
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
					<FormikGroup name="fPassword" {...register.getFieldProps("fPassword")} type="password" size="md">
						{content.regForm.fPasswords[lang]}
					</FormikGroup>
					<FormikGroup name="sPassword" {...register.getFieldProps("sPassword")} type="password" size="md">
						{content.regForm.sPasswords[lang]}
					</FormikGroup>
					<Button type="submit" className="w-100 mt-2 pt-3 pb-3" disabled={register.isSubmitting}>
						<h6 className="mb-0">{content.regForm.buttons[lang]}</h6>
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
					<FormikGroup name="emailPhone" {...login.getFieldProps("emailPhone")} size="md">
						{content.loginForm.emails[lang]}
					</FormikGroup>
					<FormikGroup name="password" {...login.getFieldProps("password")} type="password" size="md">
						{content.loginForm.passwords[lang]}
					</FormikGroup>

					<FormCheck
						type="checkbox"
						label={content.loginForm.rememberPasswords[lang]}
						value={checkboxControl.value}
						onChange={checkboxControl.onChange}
					/>

					<Link href="/">
						<a className="text-small">{content.loginForm.accesses[lang]}</a>
					</Link>
					<Button type="submit" className="w-100 mt-2 pt-3 pb-3" disabled={login.isSubmitting}>
						<h6 className="mb-0">{content.loginForm.buttons[lang]}</h6>
					</Button>
				</Form>
			)}
		</Formik>
	);
	return (
		<Modal modal={modal} size="lg" onHide={onHide}>
			<Card>
				<Card.Header>
					<div className={classes.TopButtons}>
						<a role="button" className={!isSignUp && classes.Active} onClick={() => modeHandler(false)}>
							{content.login[lang].toUpperCase()}
						</a>
						<a role="button" className={isSignUp && classes.Active} onClick={() => modeHandler(true)}>
							{content.register[lang].toUpperCase()}
						</a>
					</div>
				</Card.Header>
				<Card.Body>
					<div className="d-flex align-items-center pt-5">
						<div className="w-100 pl-2 pr-4">
							<div className={`${classes.Social}  w-100`}>
								<p className="text-small text-bold mb-3" />
								<h6>{isSignUp ? content.regForm.titles[lang] : content.loginForm.titles[lang]}:</h6>
								<div className="d-flex align-items-center justify-content-center">
									<div className={classes.Fb}>
										<FontAwesomeIcon icon={faFacebookSquare} />
									</div>
									<div className={classes.Vk}>
										<FontAwesomeIcon icon={faVk} />
									</div>
									<div className={classes.Google}>
										<FontAwesomeIcon icon={faGoogle} />
									</div>
								</div>
								{/* <Button className="w-100 text-small" variant="primary" onClick={null}>
									<strong>Facebook</strong>
								</Button>
								<Button className="w-100 mt-2 text-small" variant="danger" onClick={null}>
									<strong>Google</strong>
								</Button>
								<Button className="w-100 mt-2 text-small text-white" variant="warning" onClick={null}>
									<strong>Одноклассники</strong>
								</Button> */}
							</div>

							<h5 className={classes.Or}>or</h5>

							{form}
						</div>
					</div>
				</Card.Body>
			</Card>
		</Modal>
	);
};

export default React.memo(authModal);
