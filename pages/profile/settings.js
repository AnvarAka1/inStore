import React from "react";
import { useForm, useSelect, useFile } from "../../hooks";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FormGroup } from "../../components/UI";

import { ProfileLayout } from "../../layouts";
// import {} from '../../components'
const SettingsPage = props => {
	const nameControl = useForm();
	const dateControl = useForm();
	const genderSelect = useSelect();
	const phoneControl = useForm();
	//
	const mailControl = useForm();
	const currentPassControl = useForm();
	const newPassControl = useForm();
	const sNewPassControl = useForm();
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
					<Form onSubmit={null}>
						{/* avatar */}

						<FormGroup control={nameControl} size="sm">
							Ф.И.О
						</FormGroup>
						<FormGroup control={dateControl} type="date" size="sm">
							Дата рождения
						</FormGroup>
						<FormGroup control={genderSelect} as="select" size="sm">
							Ваш пол
						</FormGroup>
						<FormGroup control={phoneControl} size="sm">
							Номер телефона
						</FormGroup>
						<Button type="submit">Сохранить</Button>
					</Form>
				</Col>
				<Col md={4} sm={6}>
					<h6 className="text-md">Защита</h6>
					<Form onSubmit={null}>
						<FormGroup control={mailControl} type="mail" size="sm">
							Эл. почта
						</FormGroup>
						<FormGroup control={currentPassControl} type="password" size="sm">
							Текущий пароль
						</FormGroup>
						<FormGroup control={newPassControl} type="password" size="sm">
							Новый пароль
						</FormGroup>
						<FormGroup control={sNewPassControl} type="password" size="sm">
							Подтвердите пароль
						</FormGroup>
						<Button type="submit">Сохранить</Button>
					</Form>
				</Col>
			</Row>
		</ProfileLayout>
	);
};

export default SettingsPage;
