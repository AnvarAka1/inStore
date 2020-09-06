import axios from "../../../axios-api";
import BooksPage from "./";
import {getLang} from "../../../helpers/utils";
import {prop} from "ramda";
import {getPaginationFromResponse} from "../../../components/Pagination/utils";

export default BooksPage;

export const getServerSideProps = async ({ req, query }) => {
	const lang = getLang(req)
	const page = query.page ? query.page : 1

	const hasGenre = query.genre && query.genre !== 'nogenre'
	const g = hasGenre ? `&g=${query.genre}` : ''

	const url = `${lang}/books/type/2?page=${page}${g}`;
	try {
		const res = await axios.get(url);
		const data = prop('data', res)
		const bookProps = prop('results', data)
		const paginationProps = getPaginationFromResponse(data)

		const title = 'Printed books'
		return {
			props: {
				bookProps,
				paginationProps,
				title,
				url,
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
