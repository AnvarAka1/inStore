import React, { useEffect } from "react";

import { useForm, useSelect } from "../../../hooks";
import { FormGroup } from "../../../components/UI";
import { Card, MakeOrder } from "../../../components";
import { Row, Col, Button, Form } from "react-bootstrap";
// make with query params because the user can modify the cart outside this page unintentionally
// but the query params cannot be changed by this way
// only developer would do that, and do that intentionally, so it is safer
const OrderPage = props => {
	const phoneControl = useForm();
	const surnameControl = useForm();
	const nameControl = useForm();
	const citySelect = useSelect();
	const districtSelect = useSelect();
	const mailControl = useForm();
	const streetControl = useForm();
	const homeControl = useForm();
	const addressControl = useForm();
	const commentControl = useForm();
	const codeControl = useForm();
	useEffect(() => {
		console.log(props.query);
		codeControl.onChangeValue(props.query.code);
	}, []);
	return (
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
								<Form>
									{/* Mask */}
									<Form.Control
										value={phoneControl.value}
										onChange={phoneControl.onChange}
										size="sm"
										placeholder="+998 (__) ___ - __ - __"
									/>
									<Button type="submit">Получить код</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Card>
							<Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
							<Card.Body>
								<Form>
									<FormGroup control={surnameControl} size="sm">
										Фамилия*
									</FormGroup>
									<FormGroup control={nameControl} size="sm">
										Имя*
									</FormGroup>
									<FormGroup control={mailControl} size="sm">
										Эл. почта (для получения эл. версии)
									</FormGroup>
								</Form>
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
								<Form>
									<FormGroup as="select" control={citySelect} size="sm">
										Выберите город*
									</FormGroup>
									<FormGroup as="select" control={districtSelect} size="sm">
										Выберите район*
									</FormGroup>
									<FormGroup control={streetControl} size="sm" placeholder="Название улицы">
										Улица*
									</FormGroup>
									<FormGroup control={homeControl} size="sm" placeholder="Номер дома">
										Номер дома*
									</FormGroup>
									<FormGroup control={addressControl} size="sm" placeholder="Пример: 13-43-2">
										Указать в формате КВАРТАЛ-ДОМ-КВАРТИРА
									</FormGroup>
								</Form>
							</Card.Body>
						</Card>
						<Card className="mt-3">
							<Card.Header>Оставьте комментарии</Card.Header>
							<Card.Body>
								<Form>
									<FormGroup
										size="sm"
										as="textarea"
										placeholder="Ориентир, дополнительный номер и т.д"
										control={commentControl}
									/>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md={5} />
				</Row>
			</Col>
			<Col md={3}>
				<MakeOrder codeControl={codeControl} />
			</Col>
		</Row>
	);
};
const getImages = () => [
	"/static/images/payment/payme.png",
	"/static/images/payment/uzcard.png",
	"/static/images/payment/click.png",
	"/static/images/payment/humo.png",
	"/static/images/payment/visa.png",
	"/static/images/payment/paynet.png"
];
OrderPage.getInitialProps = async context => {
	return {
		params: context.params,
		query: context.query
	};
};
export default OrderPage;
