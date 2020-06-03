import React from "react";
import classes from "./NavItems.module.scss";
import Link from "next/link";

const navItems = ({authModalShow, cartCount, name, isAuthorized, onLogout, onChangeLang, lang, isMobile}) => {
    const content = {
        favourites: ["Избранные", "Favourites", "Uzb"],
        carts: ["Корзина", "Cart", "Uzb"],
        logins: ["Войти", "Login", "Uzb"],
        logouts: ["Выйти", "Logout", "Uzb"],
        language: ["Язык", "Language", "Til"]
    };
    return (
        <div className={`${classes.NavItems} ${isMobile && classes.IsMobile} `}>
            {/* if the user is authorized, then the "favourites are not displayed in navbar" */}
            {!isAuthorized && (
                <div>
                    <div className="list">
                        <Link href="favorite">
                            <a>
                                <div className="d-flex align-items-center">
                                    <img src="/images/icons/star.png" className="icon icon-sm mr-1" alt="favourite"/>
                                    <p className="text-mobile-invisible">{content.favourites[lang]}</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            )}

            <div>
                <div className="list">
                    <Link href="/cart">
                        <a>
                            <div className="d-flex align-items-center">
                                <div className={`position-relative ${isAuthorized && classes.CartRadius}`}>
                                    {cartCount ? (
                                        <span className="circle">
											<p className="text-white">{cartCount}</p>
										</span>
                                    ) : null}
                                    <img src="/images/icons/cart.png" className="icon icon-sm" alt="cart"/>
                                </div>
                                {!isAuthorized && <p className="ml-1 text-mobile-invisible">{content.carts[lang]}</p>}
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            {!isAuthorized && (
                <div onClick={authModalShow} className="list">
                    <a>
                        <div className="d-flex align-items-center list">
                            <img src="/images/icons/user.png" className="icon icon-sm mr-1" alt="login"/>
                            <p className="text-mobile-invisible">{content.logins[lang]}</p>
                        </div>
                    </a>
                </div>
            )}
            {isAuthorized && (
                <div className="flex-column justify-content-end align-items-between text-right">
                    <Link href="/profile/settings">
                        <div>
                            <p className="color-accent d-sm-inline-block d-none">{name}</p>
                            <img src="/images/icons/user.png" className="icon icon-sm clear-left float-right d-sm-none d-block" alt="login"/>
                        </div>
                    </Link>
                    <div onClick={onLogout} className="text-secondary text-small">
                        <img src="/images/icons/logout.png" className="icon mr-1"/>
                        {content.logouts[lang]}
                    </div>
                </div>
            )}
            <div className="position-relative">
                <a role="button" className="dropdown-hover text-secondary">
                    | {content.language[lang]}
                    <ul>
                        {["Ру", "En", "Uz"].map((language, index) => (
                            <li key={language}>
								<span
                                    role="button"
                                    className={`${index === lang && "text-accent"}`}
                                    onClick={() => onChangeLang(index)}
                                >
									{language}
								</span>
                            </li>
                        ))}
                    </ul>
                </a>
            </div>
        </div>
    );
};

export default navItems;
