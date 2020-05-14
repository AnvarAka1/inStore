import React from "react";
import classes from "./FormGroup.module.scss";
import { ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
const formikGroup = ({ children, onChange, value, size, as, type, name, placeholder, options }) => {
	return (
		<Form.Group className="mt-2 mb-2">
			{children && <Form.Label className={size === "sm" && classes.Sm}>{children}</Form.Label>}
			<Form.Control
				value={value}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				className={size === "sm" && classes.Sm}
				as={as}
			>
				{options ? (
					options.map((option, index) => {
						return <option key={index}>{option}</option>;
					})
				) : null}
			</Form.Control>
			<span className="text-danger text-small">
				<ErrorMessage name={name} />
			</span>
		</Form.Group>
	);
};
formikGroup.defaultProps = {
	value: "",
	type: "text",
	name: "",
	placeholder: "",
	onChange: null,
	className: ""
};
export default formikGroup;
