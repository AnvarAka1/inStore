import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, name) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token,
		name: name
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};
export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("name");
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};
export const stopLoading = () => {
	return {
		type: actionTypes.STOP_LOADING
	};
};
export const auth = (name, email, phone, password, isSignup) => {
	name = name.trim();
	email = email.trim();
	return dispatch => {
		// clear error
		dispatch(authStart());
		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
		if (isSignup) {
			formData.append("phone", phone);
			formData.append("name", name);
		}
		const urls = [ "/login", "/register" ];
		axios
			.post(urls[+isSignup], formData)
			.then(response => {
				const data = response.data.data;
				console.log(data);
				// expiration date in milliseconds
				const expirationDate = new Date(new Date().getTime() + data.expires_in * 1000);
				localStorage.setItem("token", data.access_token);
				localStorage.setItem("name", data.name);
				localStorage.setItem("expirationDate", expirationDate);

				// save user state
				dispatch(authSuccess(data.access_token, name));
				dispatch(checkAuthTimeout(data.expires_in));
			})
			.catch(error => {
				dispatch(authFail(error.response && error.response.data && error.response.data.message));
			});
	};
};
export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (new Date() > expirationDate) {
				dispatch(logout());
			} else {
				const token = localStorage.getItem("token");
				const name = localStorage.getItem("name");
				dispatch(authSuccess(token, name));
				dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
			}
		}
	};
};
