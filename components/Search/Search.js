import React from "react";
import classes from "./Search.module.scss";
import {Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const search = ({ control, onSearch }) => {
	const { t } = useTranslation()

	return (
		<Form onSubmit={onSearch} className={classes.Form}>
			<div>
				<button className={classes.Button} type="submit">
					<img src="/images/icons/search.png" alt="search" className="icon" />
				</button>
				<Form.Control
					value={control.value}
					onChange={control.onChange}
					placeholder={t('search')}
				/>
			</div>
		</Form>
	);
};

export default search;
