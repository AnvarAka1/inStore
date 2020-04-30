import React from "react";
import Product from "./Product/Product";
import { SliderCarousel } from "../";

const productsCarousel = ({ items }) => {
	const productsView = items.map(item => {
		return <Product key={item.id} {...item} />;
	});
	return <SliderCarousel items={{ xl: 8, lg: 6, sm: 5, xs: 3 }}>{productsView}</SliderCarousel>;
};

export default productsCarousel;
