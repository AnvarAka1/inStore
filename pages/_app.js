import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import React, {useEffect, useState} from "react";
import {Provider} from "react-redux";
import * as actions from "../store/actions";
import withReduxStore from "../helpers/with-redux-store";
import {prop} from 'ramda'
import {LangContext} from "../store";
import CartProvider from '../components/Cart'
import {parseCookies, setCookie} from '../helpers/utils'
import {Layout} from "../layouts";

import App from "next/app";
import SnackbarProvider from 'react-simple-snackbar'
import Router from "next/router";
import NProgress from 'nprogress'
import {I18nextProvider} from 'react-i18next';
import i18n from '../lib/i18n/i18n'
import * as gtag from '../lib/gtag'
import AuthModalProvider from "../components/Auth";

Router.events.on('routeChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())

Router.events.on('routeChangeError', () => NProgress.done())

const l = ['ru', 'en', 'uz']

const MyComponent = ({children, store}) => {
    const [lang, setLang] = useState(0);

    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    })


    useEffect(() => {
        store.dispatch(actions.authCheckState());
        const lang = prop('lang' ,parseCookies(null))

        if (lang) {
            setLang(lang);
            i18n.changeLanguage(l[lang])
        }
    }, []);

    const changeLangHandler = language => {
        setLang(language);

        i18n.changeLanguage(l[language])
        setCookie('lang', language)
    };


    return (
        <I18nextProvider i18n={i18n}>
            <LangContext.Provider value={{lang, langs: ["ru", "en", "uz"], onChangeLang: changeLangHandler}}>
                <AuthModalProvider>
                    <SnackbarProvider>
                        <CartProvider>
                            <Layout>
                                {children}
                            </Layout>
                        </CartProvider>
                    </SnackbarProvider>
                </AuthModalProvider>
            </LangContext.Provider>
        </I18nextProvider>
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
