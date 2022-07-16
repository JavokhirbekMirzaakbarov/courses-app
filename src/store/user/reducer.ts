import { LOGIN_USER, LOGOUT_USER } from './types';
const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN_USER: {
			return { ...action.payload };
		}
		case LOGOUT_USER: {
			return { ...state, token: '', email: '', name: '', isAuth: false };
		}
		default:
			return state;
	}
};
