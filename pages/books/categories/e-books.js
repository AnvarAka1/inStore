import axios from "../../../axios-api";
import BooksPage from "./";

export default BooksPage;
export const getServerSideProps = async ({ query }) => {
	const res = await axios.get("books/type/3");
	const books = res.data.results;
	return {
		props: {
			title: "Электронные книги",
			books
		}
	};
};
