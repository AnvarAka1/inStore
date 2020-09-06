import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles.scss";
import React, {useEffect} from "react";
import {Provider} from "react-redux";
import * as actions from "../store/actions";
import withReduxStore from "../helpers/with-redux-store";
import CartProvider from '../components/Cart'
import {Layout} from "../layouts";

import App from "next/app";
import SnackbarProvider from 'react-simple-snackbar'
import Router from "next/router";
import NProgress from 'nprogress'
import {I18nextProvider} from 'react-i18next';
import i18n from '../lib/i18n/i18n'
import * as gtag from '../lib/gtag'
import AuthModalProvider from "../components/Auth";
import Language from '../components/Language'

Router.events.on('routeChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())

Router.events.on('routeChangeError', () => NProgress.done())



const MyComponent = ({children, store}) => {


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
        store.dispatch(actions.authCheckState())
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <Language>
                <AuthModalProvider>
                    <SnackbarProvider>
                        <CartProvider>
                            <Layout>
                                {children}
                            </Layout>
                        </CartProvider>
                    </SnackbarProvider>
                </AuthModalProvider>
            </Language>
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
