import React from "react";
import classes from "./NavItems.module.scss";
import Link from "next/link";
import clsx from "clsx";

const navItems = ({authModalShow, cartCount, name, isAuthorized, onLogout, onChangeLang, lang, isMobile}) => {
    const content = {
        favourites: ["Избранные", "Favourites", "Tanlangan"],
        carts: ["Корзина", "Cart", "Savat"],
        logins: ["Войти", "Login", "Kirish"],
        logouts: ["Выйти", "Logout", "Chiqish"],
        language: ["Язык", "Language", "Til"]
    };
    return (
        <div className={`${classes.NavItems} ${isMobile && classes.IsMobile} `}>
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
                                    <img src="/images/icons/cart.png" className="icon icon-sm icon-cart" alt="cart"/>
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
                        {getLangs().map((language, index) => (
                            <li key={language.title} className="">
								<div
                                    role="button"
                                    className={clsx(
                                        classes.Lang,
                                        {
                                            ["text-accent"]: index === lang
                                        })}
                                    onClick={() => onChangeLang(index)}
                                >
                                    <div className={classes.LangImage}>
                                        <img src={language.image} alt={language.title} />
                                    </div>
									{language.title}
								</div>
                            </li>
                        ))}
                    </ul>
                </a>
            </div>
        </div>
    );
};
const getLangs = () => [
    {
        title: "Ру",
        image: '/images/flags/ru.png'
    },
    {
        title: "En",
        image: '/images/flags/en.png'
    },
    {
        title: "Uz",
        image: '/images/flags/uz.png'
    },

]
export default navItems;
