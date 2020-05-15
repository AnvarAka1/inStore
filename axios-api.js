import axios from "axios";

const instance = axios.create({
	baseURL: "http://api.in-study.uz/"
});

export default instance;
