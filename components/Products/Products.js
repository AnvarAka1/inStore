import React from "react";
import { Col } from "react-bootstrap";
import Product from "./Product/Product";
const products = ({ items, isVideo, md, sm, onAddRemoveItem }) => {
	const productsView = items.map(item => {
		return (
			<Col className="mb-4" key={item.id} md={md} sm={sm}>
				<Product
					{...item}
					isVideo={isVideo}
					onAddRemoveItem={onAddRemoveItem ? () => onAddRemoveItem(item.id) : null}
				/>
			</Col>
		);
	});
	return <React.Fragment>{productsView}</React.Fragment>;
};
products.defaultProps = {
	md: 3,
	sm: 4
};
export default products;
