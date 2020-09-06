import React from 'react';
import LessonHeader from "../../components/Lesson/LessonHeader";
import PriceBlock from "../../components/Lesson/PriceBlock/PriceBlock";
import {Col, Container, Row} from "react-bootstrap";
import ListBox from "../../components/Lesson/LessonContent/ListBox";
import {useTranslation} from "react-i18next";
import ClampLines from "react-clamp-lines";
import CourseOverview from "../../components/CourseOverview";

function VideoLessonPage({header, pricing, listItems, requirements, courseDescription, overview }) {
    const { t } = useTranslation()

    return (
        <>
            {/* breadcrumb */}
            <LessonHeader lang={lang} {...header} />
            <Container fluid={true}>
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                    <Row>
                        <Col md={12} className="mt-4 d-block d-md-none">
                            <PriceBlock {...pricing} />
                        </Col>
                        <Col xs={12} className="mt-4">
                            <ListBox title="Что вы получите" listItems={listItems} />
                        </Col>
                        <Col xs={12} className="mt-4">
                            <h4>{t('Requirements')}</h4>
                            <ul>
                                {requirements.map(requirement => (
                                    <li key={requirement}>
                                        <p>{requirement}</p>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col xs={12} className="mt-4">
                            <h4>{t('Course description')}</h4>
                            <ClampLines
                                text={courseDescription}
                                id="description"
                                lines={7}
                                ellipsis="..."
                                moreText={t('+ Expand')}
                                lessText={t('- Collapse')}
                                innerElement="p"
                            />
                        </Col>
                        <Col xs={12} className="mt-4">
                            <CourseOverview overviewItems={overview} />
                        </Col>
                    </Row>
                    </Col>
                    <Col md={3} className="d-none d-md-block">
                        <PriceBlock {...pricing} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const header = {
        title: 'Front-end разработчик',
        subtitle: '** #1 Best Selling Business Course! ** Everything You Need to Know About Business from Start-up to IPO',
        curator: 'Алексей Щербаков',
        date: '04-02-2020',
        rating: '4',

    }
    const pricing = {
        src: '/images/video/1.png',
        title: 'Video',
        price: '25',
        description: 'Этот курс включает в себя\n' +
        '• 15,5 часов видео по запросу\n' +
        '• 65 загружаемых ресурсов\n' +
        '• Полный пожизненный доступ\n' +
        '• Доступ на мобильный и ТВ\n' +
        '• Сертификат об окончании'
    }
    const listItems = [
        'Over 300,000 students in 208 countries!',
        'Superb reviews!',
        'Free $99 384 page book version of this course!',
        'Take your career to the next level!',
        'Launch a company from scratch.',
        'Get any job the easy way.',
        'Get many customers by using the best networking tool!',
        'Raise a lot of money quickly.',
        'Analyze company financials with ease!',
        'Understand how management consulting firms work and when you need to hire them.'
    ]

    const requirements = [
        "Ничего особенного, только упорство!",
        "Желание",
    ]
    const courseDescription = `
            ** #1 MOST PURCHASED BUSINESS COURSE ON UDEMY! ** OVER 300,000 STUDENTS IN 208 COUNTRIES ** 
            ** ACCORDING TO BUSINESS INSIDER: "Getting your MBA has never been easier. Haroun is one of the 
            highest rated professors on Udemy, so you can expect to be in good hands through the course of your education." **
            ** SPECIAL $99 BONUS: FREE 384 PAGE MBA BOOK INCLUDED ($99 value). In order 
            to further improve the student experience, there is a free download at the end of every section of this 
            course (contains every slide & entire easy to read comprehensive scripts of all 49 lectures & >100 helpful 
            internet links + more) keeping the course up to date, even easier to understand & even more fun and engaging! **
            `

    const overview = [
        {
            id: 0,
            title: "Обзор курса",
            duration: '12:33',
            lectureCount: 4,
        }, {
            id: 1,
            title: "Установка среды",
            duration: '7:03',
            lectureCount: 2,
        }, {
            id: 2,
            title: "Основы HTML",
            duration: '55:29',
            lectureCount: 8,
        },
    ]

    return {
        props: {
            header,
            pricing,
            listItems,
            requirements,
            courseDescription,
            overview
        }
    }
}
export default VideoLessonPage