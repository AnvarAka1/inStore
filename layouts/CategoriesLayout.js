import React, { useState, useEffect, useContext } from "react";
import { getStaticCategories } from "../lib/categories";
import { Row, Col } from "react-bootstrap";
import { Categories } from "../components/";
import axios from "../axios-api";
import { LangContext } from "../store";
import { useRouter } from "next/router";
let _isMounted = false;
const CategoriesLayout = ({ children, withoutGenre }) => {
	const [pathname, setPathname] = useState();
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const langContext = useContext(LangContext);

	useEffect(() => {
		_isMounted = true;
		const langs = ["ru", "en", "uz"];
		axios
			.get(langs[langContext.lang] + "/genres")
			.then(res => {
				if (_isMounted) setCategories(res.data.results);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				if (_isMounted) setLoading(false);
			});

		return () => {
			_isMounted = false;
		};
	}, [langContext.lang]);
	useEffect(() => {
		_isMounted = true;
		if (_isMounted) setPathname(router.pathname);
		return () => (_isMounted = false);
	}, [router.pathname]);

	return (
		<Row>
			<Col sm={3}>
				<Categories items={getStaticCategories()} lang={langContext.lang} isStatic={true} />
				{!withoutGenre && !loading && (
					<Categories items={categories} lang={langContext.lang} pathname={pathname} />
				)}
			</Col>
			<Col sm={9}>{children}</Col>
		</Row>
	);
};

export default CategoriesLayout;
