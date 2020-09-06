import React from "react";
import {Button} from "react-bootstrap";
import classes from "./Speaker.module.scss";
import {useTranslation} from "react-i18next";

const speaker = ({ fio, occupation, quote, onClick }) => {
	const { t } = useTranslation()

	return (
		<div className={classes.Speaker}>
			<h3>{fio}</h3>
			<p>{occupation}</p>
			<p className={classes.Quote}>{quote}</p>
			<h3 className="text-normal mt-auto">{t('Become our speaker')}</h3>
			<Button onClick={onClick}>{t('Send request')}</Button>
		</div>
	);
};

export default speaker;
