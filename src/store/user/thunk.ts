import { getUserInfoService } from '../../services/service';
import { setUserActionCreator } from './actions';

export const getCurrentUser = () => {
	return async function (dispatch: Function) {
		const currentUser = await getUserInfoService();
		return dispatch(setUserActionCreator(currentUser));
	};
};
