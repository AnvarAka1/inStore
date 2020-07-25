import React from "react";
import classes from "./Footer.module.scss";
import {Container, Row, Col} from "react-bootstrap";
import {FooterItem, Logo} from "../";
import {useTranslation} from "react-i18next";

const footer = () => {
    const {t} = useTranslation()

    return (
        <footer className={`${classes.Footer} text-left`}>
            <Container fluid className="pl-5 pr-5">
                <Row>
                    <Col sm={4}>
                        <Logo/>
                    </Col>
                </Row>
                <Row className="pt-4 pb-4">
                    <Col sm={4}>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="w-50 mr-5">
                                <p className="mb-2 text-small text-bold">+99890 018 88 11</p>
                                <p className="mb-2 text-small">{t('footer.support')}</p>

                                <div className={classes.Social}>
                                    <h6 className="text-accent mt-5 mb-3">{t('footer.social')}</h6>
                                    <ul>
                                        {getSocial().map((social, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={social.href}
                                                       target='_blank noopener noreferrer'>
                                                        <div>
                                                            <img src={social.image} alt="social"/>
                                                        </div>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h6 className="text-accent">{t('footer.payment')}</h6>
                                <ul>
                                    {getImages().map((image, index) => {
                                        return (
                                            <li className="w-75 mb-2" key={index}>
                                                <img src={image} alt="payment"/>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={{span: 5, offset: 3}} lg={{span: 4, offset: 4}}>
                        <div
                            className="d-flex justify-content-between align-items-start flex-column flex-sm-row w-100 mt-3 mt-sm-0">
                            {getItems().map((items,index) => (
                                <div className="mt-3 mt-sm-0" key={index}>
                                    <ul> {items.map((item, index1) => (
                                        <FooterItem title={t(`footer.items.${index}.${index1}`)} key={index1} link={item}/>
                                    ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
const getSocial = () => [
    {
        href: 'https://www.facebook.com/instudyuzb/',
        image: '/images/social/fb.png'
    }, {
        href: 'https://www.instagram.com/in_study.uz/',
        image: '/images/social/instagram.png'
    }, {
        href: 'https://t.me/inStudy_uz',
        image: '/images/social/tg.png',
    }, {
        href: 'https://twitter.com/StudyUz',
        image: '/images/social/twitter.png',
    }
];
const getImages = () => [
    "/images/payment/payme.png",
    "/images/payment/click.png"
];
const getItems = () => [
    [
        "/faq/about",
        "/faq/delivery",
        "/faq/",
        "/faq/"

    ],
    [
        "/faq/partnership",
        "/faq/",
        "/faq/help"
    ]
];
export default React.memo(footer);
