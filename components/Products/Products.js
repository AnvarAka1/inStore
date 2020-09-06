import React from "react";
import {Col} from "react-bootstrap";
import Product from "./Product/Product";

const products = ({ items, title, isVideo, md, sm, xs,onAddRemoveItem, limit = -1, lang }) => {

	const productsView = items.map((item, index) => {
		if(index > limit && limit > -1) return;
		return (
			<Col className="mb-4" key={item.id} md={md} sm={sm} xs={xs}>
				<Product
					lang={lang}
					{...item}
					isVideo={isVideo}
					onAddRemoveItem={onAddRemoveItem ? () => onAddRemoveItem(item) : null}
				/>
			</Col>
		);
	});
	return (
		<React.Fragment>
			{title && (
				<Col xs={12}>
					<h2>{title}</h2>
				</Col>
			)}
			{productsView}
		</React.Fragment>
	);
};
products.defaultProps = {
	md: 3,
	sm: 4,
	xs: 6
};
export default products;
