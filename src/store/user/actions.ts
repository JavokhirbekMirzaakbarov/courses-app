import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUserActionCreator = (payload: object) => ({
	type: LOGIN_USER,
	payload,
});

export const logoutUserActionCreator = () => ({
	type: LOGOUT_USER,
});
