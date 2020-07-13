import React, {useState, useEffect, useContext, useRef} from "react";
import axios from "../../../axios-api";
import {LangContext} from "../../../store/";
import {CategoriesLayout} from "../../../layouts";
import {Row, Col} from "react-bootstrap";
import {Products} from "../../../components";
import {useRouter} from "next/router";
import Pagination from "../../../components/Pagination/Pagination";

let initialPageLoad = true;
let _isMounted = false;
const BooksPage = ({title, error, booksProps, resultsProps, url, paginationProps}) => {
    if (error) return null
    const pag = paginationProps ? paginationProps : {}
    const [books, setBooks] = useState(booksProps);
    const [results, setResults] = useState(resultsProps);
    const [pagination, setPagination] = useState(pag)
    const [loading, setLoading] = useState(false)

    const {lang} = useContext(LangContext);
    const router = useRouter();

    useEffect(() => {
        _isMounted = true;
        return () => (_isMounted = false);
    }, []);

    useEffect(() => {
        _isMounted = true;
        if (!initialPageLoad && router.query.genre) {
            setLoading(true)
            const genre = "&g=" + router.query.genre
            axios
                .get(url + genre)
                .then(res => {
                    updateValues(res);
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else if (!initialPageLoad && !router.query.genre) {
            setLoading(true)
            axios.get(url)
                .then(res => {
                    updateValues(res);
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
            ;
        } else {
            initialPageLoad = false;
        }
        return () => (_isMounted = false);
    }, [router.query.genre]);

    useEffect(() => {
        setBooks(booksProps);
    }, [booksProps]);

    useEffect(() => {
        setResults(resultsProps);
    }, [resultsProps]);

    useEffect(() => {
        _isMounted = true;
        if (!initialPageLoad) {
            axios.get(url).then(res => {
                updateValues(res);
            });
        }
        return () => (_isMounted = false);
    }, [router.pathname]);

    useEffect(() => {
        const page = router.query.page ? router.query.page : 1
        const genre = router.query.genre ? "genre=" + router.query.genre + "&" : "genre=nogenre&"
        router.replace(
            `${router.pathname}?${genre}l=${lang}&page=${page}`
        );
    }, [lang]);

    const updateValues = res => {
        if (_isMounted) {
            if (booksProps) {
                setBooks(res.data.results);
                const pagination = {
                    count: res.data.count
                }
                setPagination(pagination)
            } else {
                setResults(res.data.results);
            }
        }
    };
    return (
        <CategoriesLayout>
            {!loading && booksProps && books && (
                <React.Fragment>
                    <Row>
                        <Col>
                            <h2 className="mb-3">{title[lang]}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Products items={books}/>
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
            )}
            {resultsProps &&
            results &&
            results.map(result => (
                result.books.length ? (
                    <React.Fragment key={result.id}>
                        <Row>
                            <Col>
                                <h2 className="mb-3">{result.title}</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Products items={result.books} limit={10}/>
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
    const page = query.page ? query.page : 1

    const url = lang[+query.l || 0] + "/categories/books?page=" + page;
    let res = null;
    let error = null;
    try {
        res = await axios.get(url);
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
            url,
            resultsProps: results,
            paginationProps
        }
    };
};
export default BooksPage;
