import React, {useState, useEffect} from "react";
import * as actions from "../store/actions";
import {Provider} from "react-redux";
import {useModal} from "../hooks";
import withReduxStore from "../helpers/with-redux-store";
import {CartContext, AuthModalContext, LangContext} from "../store";
import { Snackbar } from "../components";
import {Layout} from "../layouts";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import App from "next/app";
import Router from "next/router";
import NProgress from 'nprogress'


Router.events.on('routeChangeStart', () => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyComponent = ({children, store}) => {
    const [cart, setCart] = useState([]);
    const [lang, setLang] = useState(0);
    const authModal = useModal(false);

    useEffect(() => {
        store.dispatch(actions.authCheckState());
        if (localStorage.getItem("cart")) setCart(JSON.parse(localStorage.getItem("cart")));
        if (localStorage.getItem("lang")) setLang(localStorage.getItem("lang"));
    }, []);

    const changeLangHandler = language => {
        setLang(language);
        localStorage.setItem("lang", language);
    };
    // adds product to cart
    const addRemoveItemFromCart = product => {
        let cartCopy = [...cart];
        // is the product in the cart already?
        const item = cartCopy.find(item => {
            return item.id === product.id;
        });

        // this product is not in the cart. push it to the array
        if (item === undefined) {
            cartCopy.push(product);
        } else {
            // just remove this product from the cart
            cartCopy = cartCopy.filter(item => {
                return item.id !== product.id;
            });
        }
        //  save it
        localStorage.setItem("cart", JSON.stringify(cartCopy));

        setCart(cartCopy);
    };
    const findItemInCart = id => {
        let cartCopy = [...cart];
        const item = cartCopy.find(item => {
            return item.id === id;
        });
        if (item !== undefined) return true;
        return false;
    };
    const clearCartHandler = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };
    const getIds = () => {
        return cart.map(c => c.id).join(",");
    };
    const getCase = () => {
        const cartLength = cart.length;
        // type 0 => only e-books or audio books
        // type 1 => only printed books
        // type 2 => mixed
        let type = 0;
        let i = 0;
        cart.forEach((c) => {
            if (c.book_type === 2) i++; // counter of printed books
        })
        // Check for the type
        if (i === 0) type = 0;
        else if (i === cart.length) type = 1;
        else type = 2;
        return type;
    }
    const getBooksByType = (type) => {
        const cartCopy = [...cart];
        return cartCopy.filter(c => +c.book_type === type)
    }
    const getBooksExceptType = (type) => {
        const cartCopy = [...cart];
        return cartCopy.filter(c => +c.book_type !== type)
    }
    return (
        <LangContext.Provider value={{lang, langs: ["ru", "en", "uz"], onChangeLang: changeLangHandler}}>
            <AuthModalContext.Provider value={{authModal}}>
                <Snackbar>
                    <CartContext.Provider
                        value={{
                            cart,
                            onAddRemoveItem: addRemoveItemFromCart,
                            onFindInCart: findItemInCart,
                            onClearCart: clearCartHandler,
                            getIds,
                            getCase,
                            getBooksByType,
                            getBooksExceptType
                        }}
                    >
                        <Layout cartCount={cart.length}>{children}</Layout>
                    </CartContext.Provider>
                </Snackbar>
            </AuthModalContext.Provider>
        </LangContext.Provider>
    );
};

class myApp extends App {
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <MyComponent store={store}>
                    <Component {...pageProps} />
                </MyComponent>
            </Provider>
        );
    }
}

export default withReduxStore(myApp);
