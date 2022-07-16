import { configureStore } from '@reduxjs/toolkit';
import { Author, Course, User } from '../constants';
import { rootReducer } from './rootReducer';

export const initialState: {
	user?: User;
	courses?: Course[];
	authors?: Author[];
} = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: localStorage.getItem('userToken') || '',
	},
	courses: []!,
	authors: []!,
};

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
});
