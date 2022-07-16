import { CREATE_AUTHOR, SET_ALL_AUTHORS } from './types';

export const setAllAuthorsActionCreator = (authors: any) => ({
	type: SET_ALL_AUTHORS,
	payload: {
		authors,
	},
});

export const createAuthorActionCreator = (author: any) => ({
	type: CREATE_AUTHOR,
	paylod: {
		author,
	},
});
