import React from "react";
import classes from "./Compilation.module.scss";
import Link from "next/link";
const compilation = ({ className, text, img }) => {
	return (
		<Link href="/#">
			<a>
				<div className={`${className} ${classes.Compilation}`}>
					<img src={img} alt={text} />
					<div>
						<h3>{text}</h3>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default compilation;
