import React from "react";
import Product from "./Product/Product";
import {SliderCarousel} from "../";

const productsCarousel = ({ items, responsive, lang }) => {
	const resp = {
		xl: responsive ? (responsive.xl ? responsive.xl : 8) : 8,
		lg: responsive ? (responsive.lg ? responsive.lg : 6) : 6,
		sm: responsive ? (responsive.sm ? responsive.sm : 4) : 4,
		xs: responsive ? (responsive.xs ? responsive.xs : 2) : 2
	};
	const productsView = items.map(item => {
		return <Product key={item.id} {...item} lang={lang} />;
	});
	return <SliderCarousel items={resp}>{productsView}</SliderCarousel>;
};

export default React.memo(productsCarousel);
