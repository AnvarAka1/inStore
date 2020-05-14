import React from "react";
// import { useForm, useSelect, useFile } from "../../hooks";
import { Button, Row, Col } from "react-bootstrap";
import { FormikGroup } from "../../components/UI";
import { Form, Formik } from "formik";
import { array, boolean, mixed, number, object, string, date } from "yup";
import { ProfileLayout } from "../../layouts";
// import {} from '../../components'
const SettingsPage = props => {
	const initialValues1 = {
		name: "",
		dob: "",
		gender: "",
		phone: ""
	};
	return (
		<ProfileLayout>
			<Row>
				<Col sm={12}>
					<h2>Настройки</h2>
					<p className="mb-5">ID пользователя: {props.id}</p>
				</Col>
			</Row>
			<Row>
				<Col md={4} sm={6}>
					<h6 className="text-md">Персональные данные</h6>
					<Formik
						initialValues={initialValues1}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setSubmitting(true);
							setTimeout(() => {
								console.log(JSON.stringify(values, null, 2));
								resetForm();
								setSubmitting(false);
							}, 500);
						}}
						validationSchema={object({
							name: string()
								.min(2, "Имя должно содержать минимум 2 буквы")
								.max(100, "Name is too long")
								.required("Name is required!"),
							dob: date().required(),
							gender: string().required("*Email is required"),
							phone: string()
						})}
					>
						{({ values, handleChange, handleSubmit, isSubmitting, isValidating }) => (
							<Form onSubmit={handleSubmit}>
								<FormikGroup name="name" onChange={handleChange} value={values.name} size="sm">
									Ф.И.О
								</FormikGroup>
								{/* <ErrorMessage name="name" /> */}
								<FormikGroup
									name="dob"
									onChange={handleChange}
									value={values.dob}
									type="date"
									size="sm"
								>
									Дата рождения
								</FormikGroup>
								<FormikGroup
									name="gender"
									onChange={handleChange}
									value={values.gender}
									as="select"
									size="sm"
									options={[ "Мужчина", "Женщина" ]}
								>
									Ваш пол
								</FormikGroup>
								<FormikGroup name="phone" onChange={handleChange} value={values.phone} size="sm">
									Номер телефона
								</FormikGroup>
								<Button type="submit" disable={isSubmitting || isValidating}>
									Сохранить
								</Button>
							</Form>
						)}
						{/* avatar */}
					</Formik>
				</Col>
				<Col md={4} sm={6}>
					<h6 className="text-md">Защита</h6>
					<Formik
						initialValues={initialValues1}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setSubmitting(true);
							setTimeout(() => {
								console.log(JSON.stringify(values, null, 2));
								resetForm();
								setSubmitting(false);
							}, 500);
						}}
						validationSchema={object({
							email: string().email(),
							curPassword: string().min(8).max(20),
							newPassword: string().min(8).max(20),
							repPassword: string().min(8).max(20)
						})}
					>
						{({ values, handleChange, handleSubmit, isSubmitting, isValidating }) => (
							<Form onSubmit={handleSubmit}>
								<FormikGroup
									name="email"
									onChange={handleChange}
									value={values.email}
									type="email"
									size="sm"
								>
									Эл. почта
								</FormikGroup>
								<FormikGroup
									name="curPassword"
									type="password"
									onChange={handleChange}
									value={values.curPassword}
									size="sm"
								>
									Текущий пароль
								</FormikGroup>
								<FormikGroup
									name="newPassword"
									type="password"
									onChange={handleChange}
									value={values.newPassword}
									size="sm"
								>
									Новый пароль
								</FormikGroup>
								<FormikGroup
									name="repPassword"
									type="password"
									onChange={handleChange}
									value={values.repPassword}
									size="sm"
								>
									Подтвердите пароль
								</FormikGroup>

								<Button type="submit" disable={isSubmitting || isValidating}>
									Сохранить
								</Button>
							</Form>
						)}
						{/* avatar */}
					</Formik>
				</Col>
			</Row>
		</ProfileLayout>
	);
};

export default SettingsPage;
