import { CREATE_AUTHOR, SET_ALL_AUTHORS } from './types';

export const authorsReducer = (state = [], action: any) => {
	switch (action.type) {
		case SET_ALL_AUTHORS: {
			return [...action.payload.authors];
		}
		case CREATE_AUTHOR: {
			return [...state, action.payload.author];
		}
		default:
			return state;
	}
};
