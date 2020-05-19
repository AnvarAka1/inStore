import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import {cities, districts} from '../../../lib/locations'
import { parseCookies } from "../../../helpers/utils";
import axios from "../../../axios-api";
import { Form, Formik, useFormik } from "formik";
import {  object, string } from "yup";
import { FormikGroup } from "../../../components/UI";
import { Card } from "../../../components";
import { Row, Col, Button } from "react-bootstrap";
import { CartLayout } from "../../../layouts";
const OrderPage = props => {
	const [showInputMask, setShowInputMask] = useState(false);
	const [methodOfPayment, setMethodOfPayment] = useState(0);
	useEffect(() => {
		setShowInputMask(true);
	}, []);
	return (
	<Formik
	initialValues={ {
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
	validationSchema={ object({
		phone: string().required("Введите номер"),
		name:string().required("Имя обязательно"),
		email: string().email(),
		street: string().required("Введите улицу"),
		house: string().required("Введите номер дома"),
		address: string().required("Заполните это поле"),
	})}
	onSubmit={ values => {
		alert(JSON.stringify(values, null, 2));
		console.log("Hey!");
	}}
	>
		{formik=>(

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
										{showInputMask && <InputMask
													className="form-control form-control-sm mt-3"
													mask="+\9\98 (99) 999-99-99"
													name="phone"
													placeholder="+998 (__) ___-__-__"
													alwaysShowMask={true}
													value={formik.getFieldProps("phone").value}
													onChange={formik.getFieldProps("phone").onChange}
													/>}
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
										<div >
											<Button 
												onClick={()=>setMethodOfPayment(0)} 
												className={`inactive w-100 mt-2 text-small ${methodOfPayment === 0 && "green-active"}`}>
													НАЛИЧНЫЕ ДЕНЬГИ
											</Button>
											<Button 
												onClick={()=>setMethodOfPayment(1)} 
												className={`inactive w-100 mt-2 text-small ${methodOfPayment === 1 && "green-active"}`}>
													ПЛАСТИКОВАЯ КАРТА
											</Button>
										</div>
										<p className="text-small mt-3 mb-3">Платежные системы</p>
										<ul className="flex-columns">
											{getImages().map((image, index) => {
												return (
													<li key={index} className="mt-2">
														<img src={image} 
															alt="payment" 
															onClick={()=>setMethodOfPayment(index + 2)} 
															className={`${methodOfPayment !== index + 2 && "img-gray"}`} 
															/>
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
const getImages = () => [
	"/images/payment/payme.png",
	"/images/payment/uzcard.png",
	"/images/payment/click.png",
	"/images/payment/humo.png",
	"/images/payment/visa.png",
	// "/images/payment/paynet.png"
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
