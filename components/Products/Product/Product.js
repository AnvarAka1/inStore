import React from "react";
import classes from "./Product.module.scss";
import Link from "next/link";
const product = ({ id, img, title, author, currentPrice, price }) => {
	return (
		<div className={classes.Product}>
			<Link href={`/products/${id}`}>
				<a>
					<div className={classes.Image}>
						<img src={img} alt={title} />
					</div>
				</a>
			</Link>
			<Link href={`/products/${id}`}>
				<a>
					<h5>{title}</h5>
					<p className="text-small">{author}</p>
				</a>
			</Link>
			<Link href={`/products/${id}`}>
				<a>
					<div className="d-flex align-items-end">
						<h5 className="text-danger">{currentPrice}</h5>{" "}
						<p className="text-small text-crossed">{price}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default product;
