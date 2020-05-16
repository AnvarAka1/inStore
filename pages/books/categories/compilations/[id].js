import axios from "../../../../axios-api";
import BooksPage from "../";

export default BooksPage;
export const getServerSideProps = async ({ query }) => {
	console.log(query.id);
	const res = await axios.get(`collections/books?pk=${query.id}`);
	// const books = res.data.results;
	// const title = res.data.title;
	const books = res.data.results[0].books;
	const title = res.data.results[0].title;

	return {
		props: {
			title,
			books
		}
	};
};
