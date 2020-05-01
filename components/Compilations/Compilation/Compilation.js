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
						<h4>{text}</h4>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default compilation;
