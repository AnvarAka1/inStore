import React, {useEffect, useState} from "react";
import {getLang, parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import {connect} from "react-redux";
import {useForm} from "../../hooks";
import {useSnackbar} from "react-simple-snackbar";
import {Col, Row} from "react-bootstrap";
import {Comments, ProductDescription, ProductDetails, ProductsCarousel} from "../../components/";
import Router from "next/router";
import Fade from 'react-reveal/Fade'
import Link from "next/link";
import Head from 'next/head'
import {prop} from "ramda";
import {useCart, useCartManipulator} from "../../components/Cart";
import {useAuthModal} from "../../components/Auth";
import {useTranslation} from "react-i18next";


const options = {
    position: 'top-right',
    style: {
        backgroundColor: 'rgba(0, 0, 0, .75)',
        color: 'white',
        zIndex: '999999999',
        textAlign: 'left',
        fontSize: '1rem'
    },
    closeStyle: {
        color: 'white',
        fontSize: '16px',
    },
}

const BookPage = ({ bookProps, isAuthorized, query }) => {
    const { t, i18n } = useTranslation()

    const [book, setBook] = useState(bookProps);
    const [rate, setRate] = useState(0);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const { onFindInCart } = useCart()
    const { onAddRemoveItem } = useCartManipulator()
    const { onShow } = useAuthModal()
    const commentControl = useForm();
    const [openSnackbar] = useSnackbar(options)

    const title = prop('title', book)

    useEffect(() => {
        Router.replace(
            Router.pathname,
            `/books/${query.id}?l=${i18n.language}`);
    }, [i18n.language]);

    const expandDescription = () => {
        setIsDescriptionExpanded(true);
    };

    const cartHandler = (book) => {
        onAddRemoveItem(book)
        const inCart = onFindInCart(book.id)
        const add = (
            <>
                {t('Added to cart')}<br />
                <Link href={`/cart/?l=${i18n.language}`}>
                    <a className="mt-2 d-inline-block text-warning">
                        {t('Proceed to cart')}
                    </a>
                </Link>
            </>
        )
        openSnackbar(inCart ? t('Removed from cart') : add)
    }
    const commentSubmitHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("rate", rate);
        formData.append("text", commentControl.value);
        axios
            .post(`${i18n.language}/books/${book.id}/feedback`, formData, {
                headers: {
                    Authorization: `Bearer ${parseCookies(null).token}`
                }
            })
            .then(res => {
                commentControl.clear();
                return axios.get("books/" + book.id);
            })
            .then(res => {
                setBook(res.data);
            })
            .catch(err => console.log(err));
    };
    const favouriteHandler = () => {

        axios
            .post(`${i18n.language}/profile/favourites/${book.id}`, null, {
                headers: {
                    Authorization: `Bearer ${parseCookies(null).token}`
                }
            })
            .then(res => {
                const bookCopy = {
                    ...book,
                    in_favourites: !book.in_favourites
                };
                setBook(bookCopy);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const rateHandler = id => {
        setRate(id + 1);
    };



    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" property="og:title" content={title} />
                <meta name="description" property="og:description" content={prop('description', book)} />
                <meta name="og:image" property="og:image" content={prop('image', book)} />
            </Head>
            <Row>
                <Col sm={4}>
                    <ProductDetails
                        {...book}
                        social={null}
                    />

                </Col>
                <Col sm={8}>
                    <Row>
                        <Col sm={12} md={11} lg={9}>
                            <ProductDescription
                                {...book}
                                expandDescription={expandDescription}
                                isDescriptionExpanded={isDescriptionExpanded}
                                cartClicked={() => cartHandler(book)}
                                isInCart={onFindInCart(book.id)}
                                favouriteClicked={favouriteHandler}
                                isAuthorized={isAuthorized}
                            />

                            <Comments
                                items={book.feedback}
                                rate={rate}
                                onSubmit={commentSubmitHandler}
                                commentControl={commentControl}
                                rateClicked={rateHandler}
                                onAuth={onShow}
                                isAuthorized={isAuthorized}
                            />
                        </Col>
                    </Row>
                    <h3 className="mt-5">{t('This may be interesting for you')}</h3>
                    <Fade right>
                        <ProductsCarousel
                            items={prop('related', book)}
                            responsive={{lg: 4, xl: 4, sm: 4}}
                        />
                    </Fade>
                </Col>
            </Row>
        </>
    );
};

export const getServerSideProps = async ({query, req}) => {
    const lang = getLang(req)

    try {
        const res = await axios.get(`${lang}/books/${query.id}`, req);
        const bookProps = prop('data', res);

        return {
            props: {
                bookProps,
                query
            }
        }
    } catch (error) {
        return {
            props: {
                error: "Error"
            }
        };
    }
};
const mapStateToProps = state => {
    return {
        isAuthorized: state.auth.token !== null
    };
};
export default connect(mapStateToProps)(BookPage);
