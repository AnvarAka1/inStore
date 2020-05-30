import React from "react";
import classes from "./Search.module.scss";
import { Form } from "react-bootstrap";
const search = ({ control, onSearch, lang }) => {
	const content = {
		searches: ["Поиск", "Search", "Uzb"]
	};
	return (
		<Form onSubmit={onSearch} className={classes.Form}>
			<div>
				<button className={classes.Button} type="submit">
					<img src="/images/icons/search.png" className="icon" />
				</button>

				<Form.Control value={control.value} onChange={control.onChange} placeholder={content.searches[lang]} />
			</div>
		</Form>
	);
};

export default search;
