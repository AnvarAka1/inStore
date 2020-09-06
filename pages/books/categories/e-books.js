import axios from "../../../axios-api";
import BooksPage from "./";
import {getLang} from "../../../helpers/utils";
import {prop} from "ramda";
import {getPaginationFromResponse} from "../../../components/Pagination/utils";

export default BooksPage;
export const getServerSideProps = async ({ query, req }) => {
	const lang = getLang(req)
	const page = query.page ? query.page : 1
	const hasGenre = query.genre && query.genre !== 'nogenre'
	const g = hasGenre ? `&g=${query.genre}` : ''
	const url = `${lang}/books/type/3?page=${page}${g}`;

	try {
		const res = await axios.get(url);
		const data = prop('data', res)
		const bookProps = prop('results', data)
		const paginationProps = getPaginationFromResponse(data)
		const headerTitle = 'Список Электронных книг в категории "Книги"'

		const title = "headerTitle"

		return {
			props: {
				bookProps,
				paginationProps,
				title,
				url,
				headerTitle
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
