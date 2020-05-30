import React from "react";
import classes from "./Success.module.scss";
import Link from "next/link";
const success = ({ lang, closed, isWithLink, paymentLink }) => {
	const content = {
		paymentTitles: ["Остался один шаг. Кликните по этой ссылке", "One more step. Click the link", "Uzb"],
		linkToPaymentSystems: ["Перейти к оплате", "Proceed to payment", "Uzb"],
		titles: ["Покупка прошла успешно!", "Success purchase", "Uzb"],
		links: ["Перейти в персональный кабинет", "Proceed to personal account", "Uzb"],
		closes: ["Закрыть", "Close", "Uzb"]
	};
	return (
		<div className={classes.Success}>
			{isWithLink ? (
				<>
					<div>
						<img src="/images/success.png" alt="Success!"></img>
					</div>
					<h3>{content.paymentTitles[lang]}</h3>
					<div>
						<a href={paymentLink} target="_blank">
							{content.linkToPaymentSystems[lang]}
						</a>
					</div>
				</>
			) : (
				<>
					<div>
						<img src="/images/success.png" alt="Success!"></img>
					</div>
					<h3>{content.titles[lang]}</h3>
					<div>
						<Link href={`/profile/library?l=${lang}`}>
							<a>{content.links[lang]}</a>
						</Link>
						<a role="button" onClick={closed}>
							{content.closes[lang]}
						</a>
					</div>
				</>
			)}
		</div>
	);
};

export default success;
