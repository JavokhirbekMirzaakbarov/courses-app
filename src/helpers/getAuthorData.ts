import { Author } from '../constants';
import { mockedAuthorsList } from '../data';

export const getAllAuthors = () => mockedAuthorsList;

export const addAuthor = (newAuthor: Author) => {
	mockedAuthorsList.push(newAuthor);
};
