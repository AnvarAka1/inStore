import React, { useState, useEffect, useContext } from "react";
import { LangContext } from "../../../store/";
import InputMask from "react-input-mask";
import { cities, districts } from "../../../lib/locations";
import { parseCookies } from "../../../helpers/utils";
import axios from "../../../axios-api";
import { Form, Formik, useFormik } from "formik";
import { object, string } from "yup";
import { FormikGroup } from "../../../components/UI";
import { Card } from "../../../components";
import { Row, Col, Button } from "react-bootstrap";
import { CartLayout } from "../../../layouts";
const OrderPage = props => {
	const [showInputMask, setShowInputMask] = useState(false);
	const [percentage, setPercentage] = useState(null);
	const [methodOfPayment, setMethodOfPayment] = useState(0);
	const langContext = useContext(LangContext);
	useEffect(() => {
		setShowInputMask(true);
	}, []);

	const methodOfPaymentHandler = (id, percent) => {
		if (percent) {
			setPercentage(percent);
		} else {
			setPercentage(null);
		}
		setMethodOfPayment(id);
	};
	const lang = langContext.lang;
	return (
		<Formik
			initialValues={{
				phone: props.profile?.phone || "",
				name: props.profile?.fio || "",
				email: props.profile?.email || "",
				city: "",
				district: "",
				street: "",
				house: "",
				address: "",
				comment: ""
			}}
			validationSchema={object({
				phone: string().required("Введите номер"),
				name: string().required("Имя обязательно"),
				email: string().email(),
				street: string().required("Введите улицу"),
				house: string().required("Введите номер дома"),
				address: string().required("Заполните это поле")
			})}
			onSubmit={values => {
				alert(JSON.stringify(values, null, 2));
				console.log("Hey!");
			}}
		>
			{formik => (
				<Form onSubmit={formik.handleSubmit}>
					<CartLayout isOrderPage>
						<Row>
							<Col>
								<h2>Оформить заказ</h2>
							</Col>
						</Row>

						<Row>
							<Col md={6}>
								<Card className="mb-3">
									<Card.Header>Номера телефона*</Card.Header>
									<Card.Body>
										{showInputMask && (
											<InputMask
												className="form-control form-control-sm mt-3"
												mask="+\9\98 (99) 999-99-99"
												name="phone"
												placeholder="+998 (__) ___-__-__"
												alwaysShowMask={true}
												value={formik.getFieldProps("phone").value}
												onChange={formik.getFieldProps("phone").onChange}
											/>
										)}
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<Card>
									<Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
									<Card.Body>
										<FormikGroup name="name" {...formik.getFieldProps("name")} size="sm">
											Имя*
										</FormikGroup>
										<FormikGroup name="email" {...formik.getFieldProps("email")} size="sm">
											Эл. почта (для получения эл. версии)
										</FormikGroup>
									</Card.Body>
								</Card>
								<Card className="mt-3">
									<Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
									<Card.Body>
										<div>
											{getMethodsOfPayment().map(method => (
												<Button
													onClick={() =>
														methodOfPaymentHandler(method.id, method.percent || null)
													}
													key={method.id}
													className={`inactive w-100 mt-2 text-small ${methodOfPayment ===
														method.id && "green-active"}`}
												>
													{method.titles[lang].toUpperCase()}
												</Button>
											))}
											{/* {percentage && <h6 className=" mt-2 text-danger text-small">Взимается {percentage}%</h6>} */}
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6}>
								<Card>
									<Card.Header>АДРЕС ДОСТАВКИ</Card.Header>
									<Card.Body>
										<FormikGroup
											name="city"
											as="select"
											options={null}
											{...formik.getFieldProps("city")}
											size="sm"
											options={cities()}
										>
											Выберите город*
										</FormikGroup>
										<FormikGroup
											name="district"
											as="select"
											options={null}
											{...formik.getFieldProps("district")}
											size="sm"
											options={districts()}
										>
											Выберите район*
										</FormikGroup>
										<FormikGroup name="street" {...formik.getFieldProps("street")} size="sm">
											Улица*
										</FormikGroup>
										<FormikGroup name="house" {...formik.getFieldProps("house")} size="sm">
											Номер дома*
										</FormikGroup>
										<FormikGroup name="address" {...formik.getFieldProps("address")} size="sm">
											Указать в формате КВАРТАЛ-ДОМ-КВАРТИРА
										</FormikGroup>
									</Card.Body>
								</Card>
								<Card className="mt-3">
									<Card.Header>Оставьте комментарии</Card.Header>
									<Card.Body>
										<FormikGroup
											name="comment"
											as="textarea"
											placeholder="Ориентир, дополнительный номер и т.д"
											{...formik.getFieldProps("comment")}
											size="sm"
										>
											Комментарий
										</FormikGroup>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</CartLayout>
				</Form>
			)}
		</Formik>
	);
};

const getMethodsOfPayment = () => [
	{
		id: 0,
		titles: ["Наличные деньги", "Cash", "Uzb"]
	},
	{
		id: 1,
		titles: ["Пластиковая карта", "Plastic card", "Uzb"]
	},
	{
		id: 2,
		titles: ["Payme", "Payme", "Payme"],
		percent: "2"
	},

	{
		id: 3,
		titles: ["Click", "Click", "Click"],
		percent: "3.2"
	}
];
export const getServerSideProps = async context => {
	let profile = null;
	const token = parseCookies(context.req).token;
	if (token) {
		profile = await axios.get("profile", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		profile = profile.data;
	}
	return {
		props: {
			profile
		}
	};
};
export default OrderPage;
