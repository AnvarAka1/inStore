import React, { useEffect, useRef } from "react";
import { convertFrontToBackDate, convertBackToFrontDate } from "../../helpers/utils";
import axios from "../../axios-api";
import { Button, Row, Col } from "react-bootstrap";
import { FormikGroup } from "../../components/UI";
import { Form, Formik } from "formik";
import { object, string, date } from "yup";
import { ProfileLayout } from "../../layouts";
// can make static page also
const SettingsPage = props => {
	const personalInfoRef = useRef();
	const passwordRef = useRef();
	let personalInfoInitialValues = {
		name: "",
		dob: "",
		gender: "",
		phone: ""
	};
	let passwordInitialValues = {
		curPassword: "",
		newPassword: "",
		repPassword: ""
	};
	useEffect(() => {
		axios
			.get("/profile", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
					// Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ1c2VybmFtZSI6InRlc3RAbWFpbC5ydSIsImV4cCI6MTU4OTQxNzc3MCwiZW1haWwiOiJ0ZXN0QG1haWwucnUifQ.zguTX9TmBYOGitCcpXOZf6WF0MzIFF0ZYwOHhD-qcWs`
				}
			})
			.then(res => {
				console.log("Works!");
				console.log(res);
				if (personalInfoRef.current) {
					personalInfoRef.current.setFieldValue("name", res.data.fio);
					personalInfoRef.current.setFieldValue("phone", res.data.phone);
					personalInfoRef.current.setFieldValue("dob", convertBackToFrontDate(res.data.dob));
					personalInfoRef.current.setFieldValue("gender", res.data.gender);
					// personalInfoRef.current.setFieldValue("avatar", res.data.avatar);
				}
				if (passwordRef.current) {
					passwordRef.current.setFieldValue("email", res.data.email);
				}
			})
			.catch(err => console.log(err));
	}, []);
	const updatePersonalInformationHandler = values => {
		const formData = new FormData();
		formData.append("fio", values.name);
		const dob = convertFrontToBackDate(values.dob);
		formData.append("dob", dob);
		formData.append("gender", values.gender);
		formData.append("phone", values.phone);
		formData.append("avatar", values.phone);

		return axios.patch("profile/", formData, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		});
	};
	const updatePasswordHandler = () => {
		const formData = new FormData();
		formData.append("old_password", values.curPassword);
		formData.append("new_password", values.newPassword);

		return axios.put("profile/password", formData, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		});
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
						innerRef={personalInfoRef}
						initialValues={personalInfoInitialValues}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(true);
							updatePersonalInformationHandler(values)
								.then(res => {
									console.log(res);
								})
								.catch(err => console.log(err))
								.finally(() => {
									setSubmitting(false);
								});
						}}
						validationSchema={object({
							name: string()
								.min(2, "Имя должно содержать минимум 2 буквы")
								.max(100, "Name is too long")
								.required("Name is required!"),
							dob: date().required(),
							gender: string().required(),
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
									options={[ { value: "m", title: "Мужчина" }, { value: "f", title: "Женщина" } ]}
								>
									Ваш пол
								</FormikGroup>
								<FormikGroup name="phone" onChange={handleChange} value={values.phone} size="sm">
									Номер телефона
								</FormikGroup>
								<Button type="submit" disabled={isSubmitting || isValidating}>
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
						innerRef={passwordRef}
						initialValues={passwordInitialValues}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setSubmitting(true);
							updatePasswordHandler(values)
								.then(res => {
									console.log(res);
								})
								.catch(err => console.log(err))
								.finally(() => {
									setSubmitting(false);
								});
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
									onChange={null}
									value={values.email}
									type="email"
									size="sm"
									disabled
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

								<Button type="submit" disabled={isSubmitting || isValidating}>
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
