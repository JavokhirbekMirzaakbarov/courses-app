import { addAuthorService } from '../../services/service';
import { createAuthorActionCreator } from './actions';

export const addAuthor = (name: string) => {
	return async function (dispatch: Function) {
		const res: any = await addAuthorService(name);
		const response = await res.json();

		if (response.successful) {
			dispatch(createAuthorActionCreator(response.result));
		}
	};
};
