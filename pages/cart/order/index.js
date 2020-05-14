import React, { useEffect } from "react";
import InputMask from "react-input-mask";

import { Form, Formik, useFormik } from "formik";
import { array, boolean, mixed, number, object, string, date } from "yup";
import { FormikGroup } from "../../../components/UI";

import { Card, MakeOrder } from "../../../components";
import { Row, Col, Button } from "react-bootstrap";
// make with query params because the user can modify the cart outside this page unintentionally
// but the query params cannot be changed by this way
// only developer would do that, and do that intentionally, so it is safer
const OrderPage = props => {
	const formik = useFormik({
		initialValues: {
			phone: "",
			lastName: "",
			firstName: "",
			email: "",
			city: "",
			district: "",
			street: "",
			house: "",
			address: "",
			comment: ""
		},
		validationSchema: object({
			phone: string()
				.min(2, "Имя должно содержать минимум 2 буквы")
				.max(100, "Name is too long")
				.required("Name is required!"),

			lastName: string().required("*Email is required"),
			street: string()
		}),

		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
			console.log("Hey!");
		}
	});
	useEffect(() => {
		// codeControl.onChangeValue(props.query.code);
	}, []);
	return (
		<Formik>
			<Form onSubmit={formik.handleSubmit}>
				<Row>
					<Col md={9}>
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
										{/* Mask */}
										{/* <InputMask
													className="form-control form-control-sm mt-3"
													mask="+\9\98 (99) 999-99-99"
													maskChar="_"
													placeholder="+998 (__) ___-__-__"
													// alwaysShowMask={true}
													// formatChars={{ "-": "[0-9]" }}
													// permanents={[ 1, 5 ]} // permanents is an array of indexes of the non-editable characters in the mask
													value={formik.getFieldProps("phone").value}
													onChange={formik.getFieldProps("phone").onChange}
												/> */}
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<Card>
									<Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
									<Card.Body>
										<FormikGroup name="lastName" {...formik.getFieldProps("lastName")} size="sm">
											Фамилия*
										</FormikGroup>
										<FormikGroup name="firstName" {...formik.getFieldProps("firstName")} size="sm">
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
											<Button>НАЛИЧНЫЕ ДЕНЬГИ</Button>
											<Button>ПЛАСТИКОВАЯ КАРТА</Button>
										</div>
										<h6>Платежные системы</h6>
										<ul className="flex-columns">
											{getImages().map((image, index) => {
												return (
													<li key={index}>
														<img src={image} alt="payment" />
													</li>
												);
											})}
										</ul>
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
										>
											Выберите город*
										</FormikGroup>
										<FormikGroup
											name="district"
											as="select"
											options={null}
											{...formik.getFieldProps("district")}
											size="sm"
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
						<Row>
							<Col md={5} />
						</Row>
					</Col>
					<Col md={3}>
						<MakeOrder />
					</Col>
				</Row>
			</Form>
		</Formik>
	);
};
const getImages = () => [
	"/images/payment/payme.png",
	"/images/payment/uzcard.png",
	"/images/payment/click.png",
	"/images/payment/humo.png",
	"/images/payment/visa.png",
	"/images/payment/paynet.png"
];
OrderPage.getInitialProps = async context => {
	return {
		params: context.params,
		query: context.query
	};
};
export default OrderPage;
