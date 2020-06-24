import React from "react";
import classes from "./Footer.module.scss";
import {Container, Row, Col} from "react-bootstrap";
import {Logo} from "../";
import FooterItems from "./FooterItems/FooterItems";

const footer = ({lang}) => {
    const content = {
        supports: ["Служба поддержки", "Support service", "Qo'llab-quvvatlash xizmati"],
        socials: ["Мы в социальных сетях", "We are at social media", "Biz ijtimoiy tarmoqlarda"],
        payments: ["Оплата", "Payment", "To'lov"]
    };
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
                                <p className="mb-2 text-small text-bold">+998 90 000 00 00</p>
                                <p className="mb-2 text-small text-bold">+998 90 000 00 00</p>
                                <p className="mb-2 text-small">{content.supports[lang]}</p>

                                <div className={classes.Social}>
                                    <h6 className="text-accent mt-5">{content.socials[lang]}</h6>
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
                                <h6 className="text-accent">{content.payments[lang]}</h6>
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
                    <Col sm={{span: 8}}>
                        <div className="d-flex justify-content-between align-items-start flex-column flex-sm-row w-100">
                            {getItems().map(item => {
                                return (
                                    <FooterItems
                                        key={item.titles[lang]}
                                        titles={item.titles[lang]}
                                        items={item.items}
                                        lang={lang}
                                    />
                                );
                            })}
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
    // "/images/payment/uzcard.png",
    "/images/payment/click.png"
    // "/images/payment/humo.png",
    // "/images/payment/visa.png",
    // "/images/payment/paynet.png"
];
const getItems = () => [
    {
        titles: ["О нас", "About us", "Biz haqimizda"],
        items: [
            {
                titles: ["Часто задаваемые вопросы", "F.A.Q", "Ko'p so'raladigan savollar"],
                link: "/"
            },
            {
                titles: ["Помощь", "Help", "Yordam"],
                link: "/"
            },
            {
                titles: ["Правила и условия", "Rules and conditions", "Foydalanish shartlari"],
                link: "/"
            },
            {
                titles: ["Электронный билет", "E-ticket", "Elektron chipta"],
                link: "/"
            },
            {
                titles: ["Возврат и обмен", "Return and exchange", "Qaytish va almashish"],
                link: "/"
            },
            {
                titles: ["Политика конфиденциальности", "Privacy policy", "Maxfiylik siyosati"],
                link: "/"
            }
        ]
    },
    {
        titles: ["Сотрудничество", "Partnership", "Hamkorlik"],
        items: [
            {
                titles: ["Издательствам", "For publishers", "Nashriyot"],
                link: "/"
            },
            {
                titles: ["Авторам", "For authors", "Mualliflar uchun"],
                link: "/"
            },
            {
                titles: ["Библиотекам", "To libraries", "Kutubxonalarga"],
                link: "/"
            },
            {
                titles: ["Партнёрам", "For partners", "Hamkorlar"],
                link: "/"
            },
            {
                titles: ["Стать спикером", "Become a speaker", "Notiq bo'ling"],
                link: "/"
            }
        ]
    },
    {
        titles: ["Что почитать?", "What to read?", "Nima o'qish kerak?"],
        items: [
            {
                titles: ["Бестселлеры", "Best sellers", "Eng yaxshi sotuvchilar"],
                link: "/"
            },
            {
                titles: ["Скоро в продаже", "Coming soon", "Tez kunda"],
                link: "/"
            },
            {
                titles: ["Публичная оферта", "Public offer", "Ommaviy taklif"],
                link: "/"
            },
            {
                titles: ["Конфиденциальность", "Confidentiality", "Maxfiylik"],
                link: "/"
            }
        ]
    }
];
export default React.memo(footer);
