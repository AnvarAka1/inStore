import React from "react";
import Compilation from "./Compilation/Compilation";

const compilations = ({ items, onClick }) => {
	const compilationsView = items.map(item => {
		return <Compilation key={item.id} onClick={() => onClick(item.id)} text={item.text} img={item.img} />;
	});
	return <React.Fragment>{compilationsView}</React.Fragment>;
};

export default compilations;
