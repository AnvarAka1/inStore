import React, {useContext, useState} from "react";
import {ProfileLayout} from "../../layouts";
import {LangContext} from "../../store/";
import ErrorPage from "../404";
import {parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import {Col, Row} from "react-bootstrap";
import {Check, Table} from '../../components/';
import Pagination from "../../components/Pagination/Pagination";
import {useRouter} from "next/router";

const langs = ["ru", "en", "uz"];

const OrdersPage = ({results, paginationProps, error}) => {
    if (error) return <ErrorPage/>;
    const [orders, setOrders] = useState(results)
    const {lang} = useContext(LangContext);
    const pag = paginationProps ? paginationProps : {}
    const [pagination] = useState(pag)
    const router = useRouter()

    const content = {
        headers: ["История заказов", "Order history", "Sotib olish tarixi"]
    }

    const onChangePage = (page) => {
        return axios
            .get( `${langs[lang]}/profile/orders?page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${parseCookies(null).token}`
                    }
                })
            .then(res => {
                const {results} = res.data;
                setOrders(results)
            })
    }
    return (
        <ProfileLayout>
            <Row>
                <Col>
                    <h2>{content.headers[lang]}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {orders && orders.map((order, index) => (
                        <div key={index} className="mb-5 overflow-auto">
                            <Table rows={order.books} lang={lang} />
                            <Check order={order} lang={lang}/>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Pagination
                        numberOfItems={pagination.count}
                        active={router.query.page ? router.query.page : 1}
                        onChange={onChangePage}
                    />
                </Col>
            </Row>
        </ProfileLayout>
    );
};

export const getServerSideProps = async ({req, query}) => {
    let res = null;
    let error = null;
    const page = query.page ? `?page=${query.page}` : ""

    const lang = langs[+query.l || 0]
    try {
        res = await axios.get(`${lang}/profile/orders${page}`, req);

    } catch (err) {
        error = "Error";
        return {
            props: {
                error
            }
        };
    }
    const {results} = res.data;
    const {next, previous, count,} = res.data
    const paginationProps = {
        next,
        previous,
        count
    }
    return {
        props: {
            results,
            paginationProps
        }
    };
};
export default OrdersPage;
