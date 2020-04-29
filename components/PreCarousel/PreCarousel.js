import React from "react";
import classes from "./PreCarousel.module.scss";
const preCarousel = ({ isVideo, children }) => {
	return (
		<div className={classes.PreCarousel}>
			<div className={classes.Image}>
				<img src={`/static/images/icons/${!isVideo ? "books.png" : "videos.png"}`} />
			</div>
			<h3>{children}</h3>
			<p className={`text-small mt-auto ${isVideo && "text-bold"}`}>Все сборники</p>
		</div>
	);
};

export default preCarousel;
