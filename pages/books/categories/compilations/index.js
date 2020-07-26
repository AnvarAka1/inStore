import React, {useState, useEffect, useContext} from "react";
import axios from "../../../../axios-api";
import {CategoriesLayout} from "../../../../layouts";
import {Row, Col} from "react-bootstrap";
import {Compilations} from "../../../../components";
import Router from "next/router";
import {LangContext} from "../../../../store";

const CompilationsPage = props => {
    const langContext = useContext(LangContext);
    useEffect(() => {
        Router.replace(`${Router.pathname}?l=${langContext.lang}`);
    }, [langContext.lang]);
    return (
        <CategoriesLayout withoutGenre>
            {props.results &&
            props.results.map(result => (
                result.collections.length ? (
                    <React.Fragment key={result.id}>
                        <Row>
                            <Col>
                                <h2 className="mb-3">{result.title}</h2>
                            </Col>
                        </Row>
                        <Row className="mb-5 mt-1">
                            <Compilations items={result.collections}/>
                        </Row>
                    </React.Fragment>
                ) : null
            ))}
        </CategoriesLayout>
    );
};
export const getServerSideProps = async ({query}) => {
    // axios
    const lang = ["ru", "en", "uz"];
    let res = null;
    let error = null;

    try {
        res = await axios.get(`${lang[query.l || 0]}/categories/collections`);
    } catch (err) {
        console.log(err)
        error = "Error";
        return {
            props: {
                error
            }
        };
    }
    const {results} = res.data;
    return {
        props: {
            results: results
        }
    };
};

export default CompilationsPage;
