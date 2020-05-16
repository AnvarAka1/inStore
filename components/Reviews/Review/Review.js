import React from "react";
import classes from "./Review.module.scss";
import { Stars } from "../../";
import Link from "next/link";
const review = ({ id, image, name, rate, text, user }) => {
	return (
		<Link href={`/users/${user}`}>
			<a>
				<div className={classes.Review}>
					<div className="d-flex align-items-end justify-content-start">
						<div className={classes.Image}>
							<img src={image} alt={name} className="img-small radius" />
						</div>
						<div className="">
							<h5 className="mb-0 text-small text-secondary">{name}</h5>
							<Stars rate={rate} />
						</div>
					</div>
					<p className="text-secondary text-small">{text}</p>
				</div>
			</a>
		</Link>
	);
};

export default review;
