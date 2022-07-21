import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const initialState: any = {
	user: {
		isAuth: localStorage.getItem('userToken') ? true : false,
		name: localStorage.getItem('userName') || '',
		email: localStorage.getItem('userEmail') || '',
		token: localStorage.getItem('userToken') || '',
		role: '',
	},
	courses: [],
	authors: [],
};

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	middleware: [thunk],
});
