import React, {useContext, useEffect} from "react";
import axios from "../axios-api";
import {LangContext} from "../store";
import Router from "next/router";
import Fade from 'react-reveal/Fade';
import {Carousel, Col, Row} from "react-bootstrap";
import {CompilationsCarousel, Heading, NewHeader, ProductsCarousel} from "../components";
import {useTranslation} from "react-i18next";

const LandingPage = ({books, bookCollections, lang, error}) => {
    const { t } = useTranslation()
    const langContext = useContext(LangContext);

    useEffect(() => {
        Router.replace(Router.pathname, `/?l=${langContext.lang}`);
    }, [langContext.lang]);
    // Return error instead of page if there is an error while fetching data from database
    if (error) return <h3>{error}</h3>;


    // multilang
    lang = langContext.lang;

    return (
        <React.Fragment>
            <Row className="mb-4">
                <Col>
                    <Fade>
                        <section>
                            <Carousel>
                                {getCarouselItems().map(item => {
                                    return (
                                        <Carousel.Item key={item.id}>
                                            <img className="d-block w-100" src={item.img} alt={item.titles[lang]}/>
                                            <Carousel.Caption>
                                                <h3>{item.titles[lang]}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </section>
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col sm={6} className="d-none d-sm-block">
                    <Fade>
                        <div>
                            <img
                                src="/images/main/books/first.png"
                                alt="Электронные и печатные книги"
                            />
                        </div>
                    </Fade>
                </Col>
                <Col sm={6} xs={12}>
                    {/* E-books and printed books show full list */}
                    <Heading
                        text={t('for any taste')}
                        href={`/books/categories?l=${lang}`}
                    >
                        {t('Printed and e-books')}
                    </Heading>
                </Col>
            </Row>
            <Row className="mt-4 mb-4 pt-4 pb-4">
                <Col sm={12}>
                    <CompilationsCarousel items={bookCollections}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewHeader
                        href={`/books/categories?l=${lang}`}
                        lang={lang}
                    >
                        {t('books')}
                    </NewHeader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Fade right>
                        <ProductsCarousel
                            items={books}
                            lang={lang}
                        />
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    );
};
const getCarouselItems = () => [
    {
        id: 0,
        titles: ["Электронные книги и Видео уроки", "E-books and Videolessons", "Elektron darsliklar va video darsliklar"],
        img: "/images/main/books/carousel.png",
        link: "/"
    },

    {
        id: 1,
        titles: ["Электронные книги и Видео уроки", "E-books and Videolessons", "Elektron darsliklar va video darsliklar"],
        img: "/images/main/books/carousel.png",
        link: "/"
    }
];

export const getServerSideProps = async ({query}) => {
    const lang = ["ru", "en", "uz"];
    let res = null;
    let error = null;

    try {
        res = await axios.get(lang[+query.l || 0] + "/home");
    } catch (err) {
        error = "Error";

        console.log(err)
        return {
            props: {
                error
            }
        };
    }

    const {feedback, books, book_collections} = res.data;

    return {
        props: {
            feedback,
            books,
            bookCollections: book_collections,

            error
        }
    };
};
export default React.memo(LandingPage);
