import * as actionTypes from "../actions/actionTypes";

const initialState = {
	token: null,
	// id: null,
	username: null,
	name: null,
	avatar: null,
	position: null,
	error: null,
	loading: true
};

// fill all the parameters of the user
const authSuccess = (state, action) => {
	return {
		...state,
		token: action.token,
		// id: action.id,
		name: action.name,
		username: action.username,
		position: action.position,
		avatar: action.avatar,
		password: action.password,
		error: null,
		loading: false
	};
};

// error
const authFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	};
};

//clear error in global user state
const authStart = (state, action) => {
	return {
		...state,
		loading: true,
		error: null
	};
};

// clear everything
const authLogout = (state, action) => {
	return {
		...state,
		token: null,
		// id: null,
		name: null,
		username: null,
		position: null,
		avatar: null,
		email: null
	};
};
const stopLoading = (state, action) => {
	return {
		...state,
		loading: false
	};
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.STOP_LOADING:
			return stopLoading(state, action);
		default:
			return state;
	}
};
export default reducer;
