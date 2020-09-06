import React, {useEffect} from "react";
import axios from "../../../../axios-api";
import {CategoriesLayout} from "../../../../layouts";
import {Col, Row} from "react-bootstrap";
import {Compilations} from "../../../../components";
import Router, {useRouter} from "next/router";
import Pagination from "../../../../components/Pagination/Pagination";
import {useTranslation} from "react-i18next";
import {prop} from "ramda";
import {getPaginationFromResponse} from "../../../../components/Pagination/utils";
import {getLang} from "../../../../helpers/utils";

const CompilationsPage = ({results, pagination}) => {
    const { t, i18n } = useTranslation()
    const router = useRouter()

    useEffect(() => {
        Router.replace(`${Router.pathname}?l=${lang}`);
    }, [i18n.language]);

    return (
        <CategoriesLayout withoutGenre>
            <Row>
                <Col>
                    <h2 className="mb-3">{t('Collections')}</h2>
                </Col>
            </Row>
            <Row className="mb-5 mt-1">
                <Compilations items={results}/>
            </Row>
            <Row>
                <Col>
                    <Pagination
                        numberOfItems={pagination.count}
                        active={router.query.page || 1}
                    />
                </Col>
            </Row>
        </CategoriesLayout>
    );
};
export const getServerSideProps = async ({ req }) => {
    const lang = getLang(req)

    try {
        const res = await axios.get(`${lang}/collections`);

        const results = prop('data', res)
        const pagination = getPaginationFromResponse(results)

        return {
            props: {
                results,
                pagination
            }
        }
    } catch (err) {
        const error = "Error";
        return {
            props: {
                error
            }
        };
    }
};

export default CompilationsPage;
