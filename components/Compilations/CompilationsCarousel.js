import React from "react";
import {SliderCarousel} from "../";
import Compilation from "./Compilation/Compilation";

const CompilationsCarousel = ({ items, responsive, onClick }) => {
	const resp = {
		xl: responsive ? (responsive.xl ? responsive.xl : 4) : 4,
		lg: responsive ? (responsive.lg ? responsive.lg : 4) : 4,
		sm: responsive ? (responsive.sm ? responsive.sm : 3) : 2,
		xs: responsive ? (responsive.xs ? responsive.xs : 1) : 1
	};
	const compilationsView = items.map(item => {
		return <Compilation key={item.id} onClick={() => onClick(item.id)} {...item} />;
	});

	return <SliderCarousel items={
		resp
	}>{compilationsView}</SliderCarousel>;
};

export default CompilationsCarousel;
