import React, {useContext, useEffect, useState} from "react";
import axios from "../axios-api";
import {LangContext} from "../store";
import Router from "next/router";
import Fade from 'react-reveal/Fade';
import {Carousel, Col, Row} from "react-bootstrap";
import {CompilationsCarousel, Heading, NewHeader, PreCarousel, ProductsCarousel} from "../components";

const LandingPage = ({ books, audioBooks, bookCollections, audioCollections, lang, error}) => {
    const [loading, setLoading] = useState(false);
    const langContext = useContext(LangContext);

    useEffect(() => {
        Router.replace(Router.pathname, `/?l=${langContext.lang}`);
    }, [langContext.lang]);
    // Return error instead of page if there is an error while fetching data from database
    if (error) return <h3>{error}</h3>;


    // multilang
    lang = langContext.lang;
    const content = {
        eBook: {
            titles: ["Электронные и печатные", "Printed and e-books", "Elektron va bosma"],
            texts: ["книги на любой вкус", "for any taste", "Har qanday lazzat uchun kitoblar"]
        },

        booksCompilations: ["Сборники книг", "Books compilation", "Kitob to'plamlari"],

        newBooks: ["книги", "books", "kitoblar"],
        audiobook: {
            titles: ["Аудиокниги", "Audiobooks", "Audiokitoblar"],
            texts: ["слушайте когда и где угодно", "Listen whenever and wherever you are", "qachon va qaerda tinglang"]
        },
        audiobooksCompilations: ["Сборники аудиокниг", "Audiobooks compilation", "Audiokitoblar to'plamlari"],
        newAudiobooks: ["аудиокниги", "audiobooks", "audio kitoblar"]
    };
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
                            <img src="/images/main/books/first.png" alt="Электронные и печатные книги"/>
                        </div>
                    </Fade>
                </Col>
                <Col sm={6} xs={12}>

                    {/* E-books and printed books show full list */}
                    <Heading text={content.eBook.titles[lang]} lang={lang} href={`/books/categories?l=${lang}`}>
                        {content.eBook.titles[lang]}
                    </Heading>

                </Col>
            </Row>
            <Row className="mt-4 mb-4 pt-4 pb-4">
                {/* Books compilation */}
                <Col sm={4}>
                    <PreCarousel link={`/books/categories/compilations?l=${lang}`}>
                        {content.booksCompilations[lang]}
                    </PreCarousel>
                </Col>
                <Col sm={8}>{!loading && <CompilationsCarousel lang={lang} items={bookCollections}/>}</Col>
            </Row>
            <Row>
                <Col>
                    {/* New books */}
                    <NewHeader href={`/books/categories?l=${lang}`} lang={lang}>
                        {content.newBooks[lang]}
                    </NewHeader>
                </Col>
            </Row>
            <Row>
                <Col><Fade right>{!loading && <ProductsCarousel items={books} lang={lang}/>}</Fade></Col>
            </Row>
            <Row className="mt-5 pt-4 mb-5 pb-4">
                <Col sm={6} xs={12}>
                    {/* Audio books show full list */}
                    <Heading
                        lang={lang}
                        text={content.audiobook.texts[lang]}
                        href={`/books/categories/audio-books?l=${lang}`}
                    >
                        {content.audiobook.titles[lang]}
                    </Heading>
                </Col>

                <Col sm={6} className="d-none d-sm-block">
                    <div>
                        <img src="/images/main/books/second.png" alt="Электронные и печатные книги"/>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col sm={4}>
                    <PreCarousel link={`/books/categories/compilations?l=${lang}`}>
                        {content.audiobooksCompilations[lang]}
                    </PreCarousel>
                </Col>
                <Col sm={8}>{!loading && <CompilationsCarousel lang={lang} items={audioCollections}/>}</Col>
            </Row>

            <Row className="mt-5 pt-4">
                <Col>
                    <NewHeader href={`/books/categories/audio-books?l=${lang}`} lang={lang}>
                        {content.newAudiobooks[lang]}
                    </NewHeader>
                </Col>
            </Row>
            <Row>
                <Col><Fade left>{!loading && <ProductsCarousel items={audioBooks} lang={lang}/>}</Fade></Col>
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
        return {
            props: {
                error
            }
        };
    }

    const {feedback, books, audio_books, book_collections, audio_book_collections} = res.data;

    return {
        props: {
            feedback,
            books,
            audioBooks: audio_books,
            bookCollections: book_collections,
            audioCollections: audio_book_collections,
            error
        }
    };
};
export default React.memo(LandingPage);
