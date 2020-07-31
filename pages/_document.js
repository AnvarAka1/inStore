import Document, {Html, Head, Main, NextScript} from "next/document";
import meta from '../lib/meta.json'
import React from "react";



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
                        src="https://www.googletagmanager.com/gtag/js?id=UA-173469376-1"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-173469376-1');
                            `
                        }}
                    />
                    <link rel="shortcut icon" href="/images/favicon.ico"/>
                    <meta name="keywords" content={meta.keywords}/>
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
