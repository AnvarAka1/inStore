import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {NavigationItems} from "../components/";
import {parseCookies} from "../helpers/utils";
import axios from "../axios-api";
import {useCart} from "../components/Cart";
import {useTranslation} from "react-i18next";

const ProfileLayout = ({children}) => {
    const { t, i18n } = useTranslation()
    const [navigationItems, setNavigationItems] = useState([]);

    const { cart } = useCart()
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
                                href: `${el.href}?l=${i18n.language}`
                            })
                        }
                    }
                }
                let staticArray = getNavigationItems().splice(3, 2);
                staticArray.forEach(el => el.href = `${el.href}?l=${i18n.language}`);
                staticArray[0].count = cart.length;
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
                <NavigationItems items={navigationItems} />
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
        title: "Order history",
        count: 0,
        href: "/profile/orders"
    },

    {
        id: 1,
        key: "library",
        icon: "/images/icons/book.png",
        title: "My library",
        count: 0,
        href: "/profile/library"
    },
    {
        id: 2,
        key: "favourites",
        icon: "/images/icons/star.png",
        title: "Favourites",
        count: 0,
        href: "/profile/favourites"
    },
    {
        id: 3,
        key: "cart",
        icon: "/images/icons/cart.png",
        title: "Cart",
        count: 0,
        href: "/cart"
    },
    {
        id: 4,
        icon: "/images/icons/settings.png",
        title: "Settings",
        href: "/profile/settings",
        count: null,
        className: "mt-auto"
    }
];
export default ProfileLayout;
