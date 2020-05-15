import axios from "../axios-api";
export function getAllCategoryIds() {
	axios.get("categories/books").then(res => {
		return res.data.results.map(category => {
			return {
				params: {
					id: category.id
				}
			};
		});
	});
}
export function getCategoryData() {}
