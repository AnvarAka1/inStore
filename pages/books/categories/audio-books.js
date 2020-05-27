import axios from "../../../axios-api";
import BooksPage from "./";

export default BooksPage;
export const getServerSideProps = async ({ query, req }) => {
	const lang = ["ru", "en", "uz"];
	const url = lang[+query.l || 0] + "/books/type/1";
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
	return {
		props: {
			title: ["Аудиокниги", "Audiobooks", "Uzb"],
			url,
			booksProps: books
		}
	};
};
