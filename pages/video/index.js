import React, {useState} from "react";
import axios from "../../axios-api";
import {useForm, useModal} from "../../hooks";
import {Button, Col, Row} from "react-bootstrap";
import {
    Card,
    Heading,
    ImagesCarousel,
    Modal,
    PreCarousel,
    ProductsCarousel,
    ReviewForm, ReviewModal,
    ReviewsCarousel,
    Speaker,
    SpeakerModal,
    VideoHeaderSection, VideoProductsCarousel
} from "../../components";
import {useTranslation} from "react-i18next";

const LandingPage = ({feedback, videoItems, categoryItems, speakers}) => {
    const {t} = useTranslation()
    const [loading, setLoading] = useState(false);
    const [speakerNumber, setSpeakerNumber] = useState(0);
    const [categoryKey, setCategoryKey] = useState();
    const searchControl = useForm()
    const speakerModal = useModal();
    const reviewModal = useModal();

    const speakerBeforeChange = (nextSlide, {currentSlide, onMove}) => {
        if (nextSlide > currentSlide) {
            // right
            setSpeakerNumber((speakerNumber + 1) % speakers.length);
        }
        if (nextSlide < currentSlide) {
            // left
            let number = speakerNumber - 1;
            if (number < 0) number = speakers.length - 1;
            setSpeakerNumber(number);
        }
    };
    const speakerSubmitHandler = (values, setSubmitting) => {
        return setSubmitting(false)
    };

    const reviewSubmitHandler = (values, setSubmitting) => {
        return setSubmitting(false)
    };
    const searchHandler = value => {
        console.log(value)
    }

    const categoryHandler = id => {
        setCategoryKey(id)
    }

    return (
        <React.Fragment>
            <SpeakerModal
                speakerModal={speakerModal}
                onSpeakerSubmit={speakerSubmitHandler}
            />
            <ReviewModal
                reviewModal={reviewModal}
                onReviewSubmit={reviewSubmitHandler}
            />

            <Row className="mb-4">
                <Col>
                    <VideoHeaderSection
                        searchControl={searchControl}
                        onSearch={searchHandler}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Heading text={t('books on any taste')} href="/videos/categories">
                        {t('E-books and Printed books')}
                    </Heading>
                </Col>
                <Col>
                    <div>
                        <img
                            src="/images/main/books/first.png"
                            alt={t('E-books and Printed books')}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="mt-4 mb-4 pt-4 pb-4">
                <Col sm={4}>
                    <PreCarousel link="/videos/categories/compilations">
                        {t('Books collections')}
                    </PreCarousel>
                </Col>
                <Col sm={8}>
                    {!loading &&  (
                        <VideoProductsCarousel
                            activeKey={categoryKey}
                            productItems={videoItems}
                            categoryItems={categoryItems}
                            onCategoryClick={categoryHandler}
                        />
                        )}
                </Col>
            </Row>

            <Row className="mb-4  mt-5 pt-3">
                <Col>
                    <h3 className="text-accent">{t('Best speakers')}</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <ImagesCarousel
                        items={speakers}
                        beforeChange={speakerBeforeChange}
                    />
                </Col>
                <Col sm={7}>
                    <Speaker
                        onClick={speakerModal.onShow}
                        {...speakers[speakerNumber]}
                    />
                </Col>
            </Row>
            <Row className="mb-4  mt-5 pt-3">
                <Col>
                    <h3 className="text-accent">Отзывы пользователей</h3>
                </Col>
            </Row>
            <Row>
                <Col>{!loading && <ReviewsCarousel items={feedback}/>}</Col>
            </Row>
            <Row className="mt-3 mb-5 pb-4">
                <Col>
                    <div className="text-center">
                        <Button onClick={reviewModal.onShow}>Оставить отзыв</Button>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export const getServerSideProps = async ctx => {
    const res = await axios.get("home");
    const {feedback, books, speakers} = res.data;
    const videoItems = books

    const categoryItems = [
        {
            id: 0,
            title: '1'
        },
        {
            id: 1,
            title: '2'
        }
    ]



        return {
        props: {
            feedback,
            videoItems,
            speakers,
            categoryItems
        }
    };
};
export default React.memo(LandingPage);
