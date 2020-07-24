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
                        dangerouslySetInnerHTML={{
                            __html: meta.google.head
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
