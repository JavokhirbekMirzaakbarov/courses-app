import { ADD_COURSE, DELETE_COURSE, SET_COURSES } from './types';

export const coursesReducer = (state = [], action: any) => {
	switch (action.type) {
		case SET_COURSES: {
			return { ...action.payload.courses };
		}
		case DELETE_COURSE: {
			return state.filter((course: any) => course.id !== action.payload.id);
		}
		case ADD_COURSE: {
			return { ...state, ...action.payload.course };
		}
		default:
			return state;
	}
};
