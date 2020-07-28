import React, {useState, useEffect, useContext} from "react";
import axios from "../../../../axios-api";
import {CategoriesLayout} from "../../../../layouts";
import {Row, Col} from "react-bootstrap";
import {Compilations} from "../../../../components";
import Router, {useRouter} from "next/router";
import {LangContext} from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";

const CompilationsPage = ({results, pagination}) => {
    const { lang } = useContext(LangContext);
    const router = useRouter()

    useEffect(() => {
        Router.replace(`${Router.pathname}?l=${lang}`);
    }, [lang]);

    return (
        <CategoriesLayout withoutGenre>
            {results &&
            results.map(result => (
                result.books.length ? (
                    <React.Fragment key={result.id}>
                        <Row>
                            <Col>
                                <h2 className="mb-3">{result.title}</h2>
                            </Col>
                        </Row>
                        <Row className="mb-5 mt-1">
                            <Compilations items={result.books}/>
                        </Row>
                        <Row>
                            <Col>
                                <Pagination
                                    numberOfItems={pagination.count}
                                    active={router.query.page ? router.query.page : 1}
                                />
                            </Col>
                        </Row>
                    </React.Fragment>
                ) : null
            ))}
        </CategoriesLayout>
    );
};
export const getServerSideProps = async ({query}) => {
    // axios
    const langs = ["ru", "en", "uz"];
    let res = null;
    let error = null;
    const lang = langs[query.l || 0]

    try {

        res = await axios.get(`${lang}/collections/books`);

        // console.log(res)
    } catch (err) {
        error = "Error";
        return {
            props: {
                error
            }
        };
    }
    const {results, next, previous, count } = res.data

    const pagination = {
        next,
        previous,
        count
    }
    return {
        props: {
            results,
            pagination
        }
    };
};

export default CompilationsPage;
