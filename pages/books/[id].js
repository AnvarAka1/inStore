import React, {useContext, useEffect, useState} from "react";
import {getLang, parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import {connect} from "react-redux";
import {useForm} from "../../hooks";
import {AuthModalContext, CartContext, LangContext} from "../../store";
import {useSnackbar} from "react-simple-snackbar";
import {Col, Row} from "react-bootstrap";
import {Comments, ProductDescription, ProductDetails, ProductsCarousel} from "../../components/";
import Router from "next/router";
import Fade from 'react-reveal/Fade'
import Link from "next/link";

const langs = ['ru', 'en', "uz"];

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
const BookPage = ({bookProps, isAuthorized, query}) => {
    const [book, setBook] = useState(bookProps);
    const [rate, setRate] = useState(0);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const cartContext = useContext(CartContext);
    const langContext = useContext(LangContext);
    const authModalContext = useContext(AuthModalContext);
    const commentControl = useForm();
    const [openSnackbar] = useSnackbar(options)

    useEffect(() => {
        setBook(bookProps);
    }, [bookProps]);

    useEffect(() => {
        Router.replace(Router.pathname, `/books/${query.id}?l=${langContext.lang}`);
    }, [langContext.lang]);
    const expandDescription = () => {
        setIsDescriptionExpanded(true);
    };
    const cartHandler = (book) => {
        const content = {
            adds: ['Добавлено в корзину', 'Added to cart', 'Savatga qo\'shildi'],
            removes: ['Удалено с корзины', 'Removed from cart', 'Axlat qutisidan chiqarildi'],
            link: ['Перейти в корзину', 'Proceed to cart', 'Savatga o\'ting']
        }
        cartContext.onAddRemoveItem(book)
        const inCart = cartContext.onFindInCart(book.id)
        const add = (
            <>
                {content.adds[lang]}<br />
                <Link href={`/cart/?l=${lang}`}>
                    <a className="mt-2 d-inline-block text-warning">{content.link[lang]}</a>
                </Link>
            </>
        )
        openSnackbar(inCart ? content.removes[lang] : add)
    }
    const commentSubmitHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("rate", rate);
        formData.append("text", commentControl.value);
        axios
            .post(`${langs[langContext.lang]}/books/${book.id}/feedback`, formData, {
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
            .post(`${langs[langContext.lang]}/profile/favourites/${book.id}`, null, {
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
    // JSX
    const lang = langContext.lang;
    const content = {
        headers: ["Также вас может заинтересовать", "This may be interesting for you", "Uzb"]
    };
    const mobileProductDescription = (
            <ProductDescription
                isMobile={true}
                {...book}
                lang={lang}
                expandDescription={expandDescription}
                isDescriptionExpanded={isDescriptionExpanded}
                cartClicked={() => cartHandler(book)}
                isInCart={cartContext.onFindInCart(book.id)}
                favouriteClicked={favouriteHandler}
                isAuthorized={isAuthorized}
            />
    )
    return (
        <Row>
            <Col sm={4}>
                <ProductDetails
                    {...book}
                    social={null}
                    mobileProductDescription={mobileProductDescription}
                />

            </Col>
            <Col sm={8}>
                <Row>
                    <Col sm={12} md={11} lg={9}>
                        <ProductDescription
                            {...book}
                            lang={lang}
                            expandDescription={expandDescription}
                            isDescriptionExpanded={isDescriptionExpanded}
                            cartClicked={() => cartHandler(book)}
                            isInCart={cartContext.onFindInCart(book.id)}
                            favouriteClicked={favouriteHandler}
                            isAuthorized={isAuthorized}
                        />

                        <Comments
                            lang={lang}
                            items={book.feedback}
                            rate={rate}
                            onSubmit={commentSubmitHandler}
                            commentControl={commentControl}
                            rateClicked={rateHandler}
                            onAuth={authModalContext.authModal.onShow}
                            isAuthorized={isAuthorized}
                        />
                    </Col>
                </Row>
                <h3 className="mt-5">{content.headers[lang]}</h3>
                <Fade right><ProductsCarousel items={book.related} lang={lang} responsive={{lg: 4, xl: 4, sm: 4}}/></Fade>
            </Col>
        </Row>
    );
};

export const getServerSideProps = async ({query, req}) => {
    const lang = getLang(req)

    let res = null;
    try {
        res = await axios.get(`${lang}/books/${query.id}`, req);

    } catch (error) {
        return {
            props: {
                error: "Error"
            }
        };
    }
    const bookProps = res.data;
    return {
        props: {
            bookProps,
            query
        }
    };
};
const mapStateToProps = state => {
    return {
        isAuthorized: state.auth.token !== null
    };
};
export default connect(mapStateToProps)(BookPage);
