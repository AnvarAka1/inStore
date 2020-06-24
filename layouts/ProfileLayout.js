import React, {useState, useEffect, useContext} from "react";
import {Row, Col} from "react-bootstrap";
import {NavigationItems} from "../components/";
import {CartContext, LangContext} from "../store/";
import {parseCookies} from "../helpers/utils";
import axios from "../axios-api";

const ProfileLayout = ({children}) => {
    const [navigationItems, setNavigationItems] = useState([]);
    const langContext = useContext(LangContext);
    const cartContext = useContext(CartContext)
    useEffect(() => {
        axios
            .get("profile/info", {
                headers: {
                    Authorization: `Bearer ${parseCookies(null).token}`
                }
            })
            .then(res => {
                let finalArray = [];
                const array = [];
                for (let key in res.data) {
                    array.push({key, data: res.data[key]});
                }
                for (let element of array) {
                    for(let el of getNavigationItems()){
                        if (element.key === el.key){
                            finalArray.push({
                                ...el,
                                count: element.data,
                                href: el.href + "?l=" + langContext.lang
                            })
                        }
                    }
                }
                let staticArray = getNavigationItems().splice(3, 2);
                staticArray.forEach(el=>{
                        el.href = el.href + "?l=" + langContext.lang
                });
                staticArray[0].count = cartContext.cart.length;
                finalArray = [...finalArray, ...staticArray];
                setNavigationItems(finalArray);

            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
            });
    }, []);

    return (
        <Row>
            <Col sm={3}>
                <NavigationItems lang={langContext.lang} items={navigationItems}/>
            </Col>
            <Col sm={9}>{children}</Col>
        </Row>
    );
};

const getNavigationItems = () => [
    {
        id: 0,
        key: "orders",
        icon: "/images/icons/story.png",
        titles: ["История заказов", "Order history", "Sotib olish tarixi"],
        count: 0,
        href: "/profile/orders"
    },

    {
        id: 1,
        key: "library",
        icon: "/images/icons/book.png",
        titles: ["Моя библиотека", "My library", "Mening kutubxonam"],
        count: 0,
        href: "/profile/library"
    },
    {
        id: 2,
        key: "favourites",
        icon: "/images/icons/star.png",
        titles: ["Избранные", "Favourites", "Tanlangan"],
        count: 0,
        href: "/profile/favourites"
    },
    {
        id: 3,
        key: "cart",
        icon: "/images/icons/cart.png",
        titles: ["Корзина", "Cart", "Savat"],
        count: 0,
        href: "/cart"
    },
    {
        id: 4,
        icon: "/images/icons/settings.png",
        titles: ["Настройки", "Settings", "Sozlamalar"],
        href: "/profile/settings",
        count: null,
        className: "mt-auto"
    }
];
export default ProfileLayout;
