import React from "react";
import Product from "./Product/Product";
const products = ({ items }) => {
	const productsView = items.map(item => {
		return <Product key={item.id} {...item} />;
	});
	return <React.Fragment>{productsView}</React.Fragment>;
};

export default products;
