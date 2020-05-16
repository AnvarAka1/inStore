import axios from "../../../axios-api";
import BooksPage from "./";

export default BooksPage;
export const getServerSideProps = async ({ query }) => {
	const res = await axios.get("books/type/2");
	const books = res.data.results;
	return {
		props: {
			title: "Печатные книги",
			books
		}
	};
};
