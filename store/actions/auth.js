import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, username, name, position, avatar) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token,
		username: username,
		name: name,
		position: position,
		avatar: avatar
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
	localStorage.removeItem("expirationDate");
	localStorage.removeItem("name");
	localStorage.removeItem("src");
	localStorage.removeItem("avatar");
	localStorage.removeItem("position");
	localStorage.removeItem("file");
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};
export const stopLoading = () => {
	return {
		type: actionTypes.STOP_LOADING
	};
};
export const auth = (userName, name, password, position, isSignup) => {
	// positions:
	// 0 - staff,
	// 1 - teacher,
	// 2 - student

	userName = userName.trim();
	name = name.trim();
	return dispatch => {
		// clear error
		dispatch(authStart());
		const formData = new FormData();
		formData.append("username", userName);
		formData.append("name", name);
		formData.append("password", password);
		formData.append("position", position);
		const urls = [
			[ "/staff-login", "/staff-register" ],
			[ "/teacher-login", "/teacher-register" ],
			[ "/student-login", "/student-register" ]
		];
		const positionType = [ "staff", "teacher", "student" ];

		axios
			.post(urls[+position][+isSignup], formData)
			.then(response => {
				const data = response.data.data;
				const person = response.data[positionType[position]];

				// expiration date in milliseconds
				const expirationDate = new Date(new Date().getTime() + data.expires_in * 1000);
				localStorage.setItem("token", data.access_token);
				localStorage.setItem("name", person.name);
				localStorage.setItem("avatar", person.avatar);
				localStorage.setItem("position", position);
				localStorage.setItem("file_assignment", "http://origami.computer/assignments/");
				localStorage.setItem("file_assignment_submission", "http://origami.computer/assignment-submission/");
				localStorage.setItem("src", "https://origami.computer/avatars/");
				localStorage.setItem("expirationDate", expirationDate);

				// save user state
				dispatch(authSuccess(data.access_token, userName, name, position, person.avatar));
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
				const avatar = localStorage.getItem("avatar");
				const position = localStorage.getItem("position");
				dispatch(authSuccess(token, null, name, position, avatar));
				dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
			}
		}
	};
};
