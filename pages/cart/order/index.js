import React from "react";
import { Layout } from "../../../layouts";
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
	return (
		<Layout>
			<Row>
				<Col md={9}>
					<Row>
						<Col>
							<h2>Оформить заказ</h2>
						</Col>
					</Row>

					<Row>
						<Col md={4}>
							<Card>
								<Card.Header>Номера телефона*</Card.Header>
								<Card.Body>
									<Form>
										{/* Mask */}
										<Form.Control value={phoneControl.value} onChange={phoneControl.onChange} />
										<Button type="submit">Получить код</Button>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Card>
								<Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
								<Card.Body>
									<Form>
										<FormGroup control={surnameControl}>Фамилия*</FormGroup>
										<FormGroup control={surnameControl}>Имя*</FormGroup>
										<FormGroup control={surnameControl}>
											Эл. почта (для получения эл. версии)
										</FormGroup>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Header>АДРЕС ДОСТАВКИ</Card.Header>
								<Card.Body>
									<Form>
										<FormGroup as="select" control={surnameControl}>
											Выберите город*
										</FormGroup>
										<FormGroup as="select" control={surnameControl}>
											Выберите район*
										</FormGroup>
										<FormGroup control={surnameControl}>
											Эл. почта (для получения эл. версии)
										</FormGroup>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={4} />
					</Row>
				</Col>
				<Col md={3}>
					<MakeOrder />
				</Col>
			</Row>
		</Layout>
	);
};

OrderPage.getInitialProps = async context => {
	return {
		params: context.params
	};
};
export default OrderPage;
