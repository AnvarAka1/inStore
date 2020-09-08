import React from 'react';
import {Col} from "react-bootstrap";
import Comment from "./Cards/CommentField";
import Address from "./Cards/Address";
import Contact from "./Cards/Contact";
import Phone from "./Cards/Phone";

function PrintedBooksOrder ({getFieldProps}) {
    return (
        <>
            <Col md={6}>
                <Phone />
                <Contact />
            </Col>
        <Col md={6}>
            <Address getFieldProps={getFieldProps} />
            <Comment className="mt-3" getFieldProps={getFieldProps} />
        </Col>
    </>
    )
}

export default PrintedBooksOrder