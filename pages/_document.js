import Document, {Head, Html, Main, NextScript} from "next/document";
import meta from '../lib/meta.json'
import React from "react";
import {GA_TRACKING_ID} from "../lib/gtag";



class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }


    render() {
        return (
            <Html lang="ru">
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                  page_path: window.location.pathname,
                                });
                            `
                        }}
                    />
                    <link rel="shortcut icon" href="/images/favicon.ico"/>
                    <meta name="keywords" content={meta.keywords}/>
                    <meta name="description" content={meta.description} />
                    <meta name="og:image" property="og:image" content="/images/logo/logo-alt.png" />
                </Head>
                <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: meta.google.body
                    }}
               />
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
