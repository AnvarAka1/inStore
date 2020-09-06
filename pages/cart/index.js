import React from "react";
import {CartLayout} from "../../layouts";
import {Button, Col, Row} from "react-bootstrap";
import {Products} from "../../components";
import {useCart, useCartManipulator} from "../../components/Cart";
import {useTranslation} from "react-i18next";

const CartPage = props => {
	const { t } = useTranslation()
	const {cart} = useCart()
	const { onAddRemoveItem, onClearCart } = useCartManipulator()

	const responsive = {
		md: 3,
		lg: 2,
		sm: 3,
		xs: 6
	}
	return (
		<CartLayout>
			<Row>
				<Col>
					<h2>{t('Cart')}</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="d-flex align-items-center">
						<h3 className="text-normal mb-0 mr-3">
							{t('Total in cart')} {cart.length}
						</h3>
						<Button variant="secondary text-small" onClick={onClearCart}>
							{t('Reset cart')}
						</Button>
					</div>
				</Col>
			</Row>
			<Row className="mt-3">
				{cart.length ? (
					<Products
						{...responsive}
						items={cart}
						onAddRemoveItem={onAddRemoveItem}
					/>
				) : (
					<Col>
						<h4 className="text-secondary">{t('Cart is empty')}</h4>
					</Col>
				)}
			</Row>
		</CartLayout>
	);
};

export default CartPage;
