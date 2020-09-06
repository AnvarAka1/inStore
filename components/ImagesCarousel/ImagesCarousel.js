import React from "react";
import classes from "./ImageCarousel.module.scss";
import {SliderCarousel} from "../";

const imagesCarousel = ({ items, nextClicked, prevClicked, beforeChange }) => {
	const imagesView = items.map(item => {
		return (
			<div key={item.id} className={classes.Image}>
				<img src={item.image} alt={item.fio} />
				<div />
			</div>
		);
	});

	return (
		<SliderCarousel
			items={{ xl: 1, lg: 1, sm: 1, xs: 1 }}
			nextClicked={nextClicked}
			beforeChange={beforeChange}
			prevClicked={prevClicked}
		>
			{imagesView}
		</SliderCarousel>
	);
};

export default imagesCarousel;
