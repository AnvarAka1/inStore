import React from "react";
import classes from "./NavItems.module.scss";
import Link from "next/link";
const navItems = ({ authModalShow }) => {
	return (
		<div className={classes.NavItems}>
			<div>
				<Link href="favorite">
					<a>Избранные</a>
				</Link>
			</div>
			<div>
				<Link href="/cart">
					<React.Fragment>
						<img src="/images/icons/cart.png" className="icon icon-sm" alt="cart" />
						<a>Корзина</a>
					</React.Fragment>
				</Link>
			</div>
			<div onClick={authModalShow}>Войти</div>
		</div>
	);
};

export default navItems;
