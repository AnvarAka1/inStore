import React from "react";
import classes from "./Heading.module.scss";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
const heading = ({ className, children, text, href, lang }) => {
	const content = {
		buttons: [ "Открыть весь список", "Open full list", "Uzb" ]
	};

	return (
		<Fade bottom>
		<div className={[ className, classes.Heading ].join(" ")}>
			<h3>{children}</h3>
			<h5 className="mb-3 text-normal">{text}</h5>
			<Link href={href}>
				<a>
					<Button>{content.buttons[lang]}</Button>
				</a>
			</Link>
		</div>
		</Fade>
	);
};

heading.defaultProps = {
	href: "#"
};
export default heading;
