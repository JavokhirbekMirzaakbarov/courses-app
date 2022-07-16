import { ADD_COURSE, DELETE_COURSE, SET_COURSES } from './types';

export const setAllCoursesActionCreator = (courses: any) => ({
	type: SET_COURSES,
	payload: {
		courses,
	},
});

export const deleteCourseActionCreator = (id: string) => ({
	type: DELETE_COURSE,
	payload: {
		id,
	},
});

export const addCourseActionCreator = (course: any) => ({
	type: ADD_COURSE,
	payload: {
		course,
	},
});
