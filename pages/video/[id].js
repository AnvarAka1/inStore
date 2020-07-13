import React, {useContext} from 'react';
import LessonHeader from "../../components/Lesson/LessonHeader";
import LangContext from "../../store/LangContext";
import PriceBlock from "../../components/Lesson/PriceBlock/PriceBlock";
import {Container, Col, Row} from "react-bootstrap";
import ListBox from "../../components/Lesson/LessonContent/ListBox";

function VideoLessonPage({header, pricing, listItems }) {
    const {lang} = useContext(LangContext)
    return (
        <>
            {/* breadcrumb */}
            <LessonHeader lang={lang} {...header} />
            <Container fluid={true}>
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                    <Row>
                        <Col xs={12}>
                            <ListBox title="Что вы получите" listItems={listItems} />
                        </Col>
                        <Col xs={12}>

                        </Col>
                    </Row>
                    </Col>
                    <Col md={3}>
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
    return {
        props: {
            header,
            pricing,
            listItems
        }
    }
}
export default VideoLessonPage