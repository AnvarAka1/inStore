import React from 'react';
import {Col, Row} from "react-bootstrap";
import VideoContent from "../../../components/VideoContent/VideoContent";
import PlaylistItems from "../../../components/VideoContent/Playlist/PlaylistItems";


function VideoPage({overview, playlist}) {

    return (
        <Row>
            <Col sm={9}>
                {/*    BreadCrumb */}
                <VideoContent
                    author="Anvar"
                    title="Title"
                    description="Some description"
                    overview={overview}
                />

            </Col>
            <Col sm={3}>
                <PlaylistItems
                    items={playlist}
                />
            </Col>
        </Row>
    )
}

export const getServerSideProps = (ctx) => {
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
    const playlist = [
        {
            id: 0,
            title: 'Серия-1',
            src: '/images/main/books/carousel.png'
        },
        {
            id: 1,
            title: 'Серия-2',
            src: '/images/main/books/carousel.png'
        },
        {
            id: 2,
            title: 'Серия-3',
            src: '/images/main/books/carousel.png'
        },
    ]
    return {
        props: {
            overview,
            playlist
        }
    }
}
export default VideoPage