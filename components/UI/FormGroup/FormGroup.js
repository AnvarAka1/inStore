import React from "react";
import { Form } from "react-bootstrap";
const formGroup = ({ children, control, isSelect }) => {
	return (
		<Form.Group>
			<Form.Label>{children}</Form.Label>
			<Form.Control value={control.value} onChange={control.onChange} />
		</Form.Group>
	);
};

export default formGroup;
