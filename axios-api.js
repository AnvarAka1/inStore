import axios from "axios";
import { parseCookies } from './helpers/utils'
import { prop } from 'ramda'

const instance = axios.create({
	baseURL: "https://api.in-study.uz"
});

instance.interceptors.request.use((req) => {
	const cookies = parseCookies(req)
	const token = prop('token', cookies)
	if(token) {
		const Authorization = `Bearer ${token}`
		delete req.headers.accept
		delete req.headers.host

		req.headers = {
			...req.headers,
			Authorization
		}
	}
	return req

}, error => {
	return Promise.reject(error);
});
export default instance;
