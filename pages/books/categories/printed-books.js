import axios from "../../../axios-api";
import BooksPage from "./";

export default BooksPage;
export const getServerSideProps = async ({ query }) => {
	const lang = ["ru", "en", "uz"];
	const page = query.page ? query.page : 1
	const g = query.genre && query.genre !== 'nogenre' ? `&g=${query.genre}` : ''

	const url = `${lang[+query.l || 0]}/books/type/2?page=${page}${g}`;
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
	const books = res.data.results;
	const {next, previous, count } = res.data

	const pagination = {
		next,
		previous,
		count
	}
	return {
		props: {
			title: ["Печатные книги", "Printed books", "Bosma kitoblar"],
			url,
			booksProps: books,
			pagination
		}
	};
};
