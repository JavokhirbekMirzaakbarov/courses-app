import { LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER } from './types';

export const loginUserActionCreator = (payload: object) => ({
	type: LOGIN_USER,
	payload,
});

export const logoutUserActionCreator = () => ({
	type: LOGOUT_USER,
});

export const setUserActionCreator = (user: object) => ({
	type: SET_CURRENT_USER,
	payload: {
		user,
	},
});
