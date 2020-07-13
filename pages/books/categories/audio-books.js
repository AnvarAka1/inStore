import axios from "../../../axios-api";
import BooksPage from "./";

export default BooksPage;

export const getServerSideProps = async ({ query, req }) => {
	const lang = ["ru", "en", "uz"];
	const page = query.page ? query.page : 1
	const url = lang[+query.l || 0] + "/books/type/1?page=" + page;
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
	const {next, previous, count, } = res.data
	const books = res.data.results
	const pagination = {
		next,
		previous,
		count
	}

	return {
		props: {
			title: ["Аудиокниги", "Audiobooks", "Audiokitoblar"],
			url,
			booksProps: books,
			pagination
		}
	};
};
