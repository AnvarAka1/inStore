import React from "react";
import {Col} from "react-bootstrap";
import Product from "./Product/Product";
import {prop, propOr} from "ramda";

const products = (props) => {
	const items = prop('items', props)
	const title = prop('title', props)
	const removable = prop('removable', props)
	const md = prop('md', props)
	const sm = prop('sm', props)
	const xs = prop('xs', props)
	const onAddRemoveItem = prop('onAddRemoveItem', props)
	const limit = propOr(1, 'limit', props)

	return (
		<React.Fragment>
			{title && (
				<Col xs={12}>
					<h2>{title}</h2>
				</Col>
			)}
			{items.map((item, index) => {
				if(index > limit && limit > -1) return;

				return (
					<Col className="mb-4" key={item.id} md={md} sm={sm} xs={xs}>
						<Product
							{...item}
							removable={removable}
							onAddRemoveItem={() => onAddRemoveItem(item)}
						/>
					</Col>
				);
			})}
		</React.Fragment>
	);
};
products.defaultProps = {
	md: 3,
	sm: 4,
	xs: 6,
	onAddRemoveItem: () => {}
};
export default products;
