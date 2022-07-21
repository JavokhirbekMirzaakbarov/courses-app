import { LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER } from './types';
const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN_USER: {
			return { ...action.payload };
		}
		case LOGOUT_USER: {
			return {
				...state,
				token: '',
				email: '',
				name: '',
				user: '',
				isAuth: false,
			};
		}
		case SET_CURRENT_USER: {
			return {
				...state,
				email: action.payload.user.email,
				name: action.payload.user.name,
				role: action.payload.user.role,
			};
		}
		default:
			return state;
	}
};
