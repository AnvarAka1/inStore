import React from "react";
import classes from "./NavItems.module.scss";
import Link from "next/link";
const navItems = ({ authModalShow, cartCount }) => {
	return (
		<div className={`${classes.NavItems} `}>
			<div>
				<div className="list">
					<Link href="favorite">
						<a>
							<div className="d-flex align-items-center">
								<img src="/images/icons/star.png" className="icon icon-sm mr-1" alt="favourite" />
								Избранные
							</div>
						</a>
					</Link>
				</div>
			</div>

			<div>
				<div className="list">
					<Link href="/cart">
						<a>
							<div className="d-flex align-items-center">
								<div className="position-relative">
									{cartCount ? (
										<span className="circle">
											<p>{cartCount}</p>
										</span>
									) : null}
									<img src="/images/icons/cart.png" className="icon icon-sm mr-1" alt="cart" />
								</div>
								Корзина
							</div>
						</a>
					</Link>
				</div>
			</div>
			<div onClick={authModalShow} className="list">
				<a>
					<div className="d-flex align-items-center list">
						<img src="/images/icons/user.png" className="icon icon-sm mr-1" alt="login" />Войти
					</div>
				</a>
			</div>
		</div>
	);
};

export default navItems;
