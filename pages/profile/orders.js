import React, {useState} from "react";
import {ProfileLayout} from "../../layouts";
import ErrorPage from "../404";
import {getLang, parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import {Col, Row} from "react-bootstrap";
import {Check, Table} from '../../components/';
import Pagination from "../../components/Pagination/Pagination";
import {useRouter} from "next/router";
import {getPaginationFromResponse} from "../../components/Pagination/utils";
import {path, prop} from "ramda";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types'
const OrdersPage = ({results, paginationProps, error}) => {
    if (error) return <ErrorPage/>;

    const { t, i18n } = useTranslation()
    const [orders, setOrders] = useState(results)

    const pag = paginationProps || {}
    const [pagination] = useState(pag)
    const router = useRouter()

    const onChangePage = (page) => {
        return axios
            .get( `${i18n.language}/profile/orders?page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${parseCookies(null).token}`
                    }
                })
            .then(res => {
                const results = path(['data', 'results'], res)
                setOrders(results)
            })
    }
    return (
        <ProfileLayout>
            <Row>
                <Col>
                    <h2>{t('Order history')}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {orders && orders.map((order, index) => (
                        <div key={index} className="mb-5 overflow-auto">
                            <Table rows={order.books} />
                            <Check order={order} />
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
    const page = query.page ? `?page=${query.page}` : ""
    const lang = getLang(req)

    try {
        const res = await axios.get(`${lang}/profile/orders${page}`, req);

        const data = prop('data', res)
        const results = prop('results', data)

        const paginationProps = getPaginationFromResponse(data)

        return {
            props: {
                results,
                paginationProps
            }
        }
    } catch (err) {
        return {
            props: {
                error: "Error"
            }
        };
    }
};
export default OrdersPage;
