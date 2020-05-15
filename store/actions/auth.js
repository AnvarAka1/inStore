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
		if (!isSignup) {
			formData.append("username", email);
		}
		formData.append("password", password);
		if (isSignup) {
			const profile = {
				fio: name,
				phone: phone
			};
			formData.append("email", email);
			formData.append("profile", JSON.stringify(profile));
		}
		const urls = [ "/login", "/register" ];
		axios
			.post(`accounts${urls[+isSignup]}`, formData)
			.then(response => {
				console.log(response);
				// expiration date in milliseconds
				// const expirationDate = new Date(new Date().getTime() + data.expires_in * 1000);
				console.log(response.data.token);
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("name", response.data.name);
				// localStorage.setItem("expirationDate", expirationDate);
				// save user state
				dispatch(authSuccess(response.token, name));
				// dispatch(checkAuthTimeout(response.expires_in));
			})
			.catch(error => {
				console.log(error);
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
			const token = localStorage.getItem("token");
			const name = localStorage.getItem("name");
			dispatch(authSuccess(token, name));

			// uncomment when expiration date comes in
			// const expirationDate = new Date(localStorage.getItem("expirationDate"));
			// if (new Date() > expirationDate) {
			// 	dispatch(logout());
			// } else {
			// 	const token = localStorage.getItem("token");
			// 	const name = localStorage.getItem("name");
			// 	dispatch(authSuccess(token, name));
			// 	dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
			// }
		}
	};
};
