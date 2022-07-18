import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const initialState: any = {
	user: {
		isAuth: localStorage.getItem('userToken') ? true : false,
		name: localStorage.getItem('userName') || '',
		email: localStorage.getItem('userEmail') || '',
		token: localStorage.getItem('userToken') || '',
	},
	courses: [],
	authors: [],
};

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
});
