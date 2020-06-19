import React, {useContext} from "react";
import {ProfileLayout} from "../../layouts";
import {LangContext} from "../../store/";
import ErrorPage from "../404";
import {parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import {Col, Row} from "react-bootstrap";
import {Check, Table} from '../../components/';

const OrdersPage = ({results, error}) => {

    const langContext = useContext(LangContext);
    if (error) return <ErrorPage/>;
    const content = {
        header: ["История заказов", "Order history", "Uzb"]
    }
    return (
        <ProfileLayout>
            <Row>
                <Col>
                    <h2>{content.header[langContext.lang]}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {results && results.map((result, index) => (
                        <div key={index} className="mb-5 overflow-auto">
                            <Table rows={result.books} lang={langContext.lang} />
                            <Check order={result} lang={langContext.lang}/>
                        </div>
                    ))}
                </Col>
            </Row>
        </ProfileLayout>
    );
};

export const getServerSideProps = async ({req, query}) => {
    const lang = ["ru", "en", "uz"];
    let res = null;
    let error = null;
    try {
        res = await axios.get(lang[+query.l || 0] + "/profile/orders", {
            headers: {
                Authorization: `Bearer ${parseCookies(req).token}`
            }
        });
    } catch (err) {
        error = "Error";
        console.log(err);

        return {
            props: {
                error
            }
        };
    }
    const {results} = res.data;
    return {
        props: {
            results
        }
    };
};
export default OrdersPage;
