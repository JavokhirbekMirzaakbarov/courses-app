import {
	addCourseService,
	deleteCourseService,
	updateCourseService,
} from '../../services/service';
import {
	addCourseActionCreator,
	deleteCourseActionCreator,
	updateCourseActionCreator,
} from './actions';

export const deleteCourse = (courseId: string) => {
	return async function (dispatch: Function) {
		const response: any = await deleteCourseService(courseId);
		if (response.ok) dispatch(deleteCourseActionCreator(courseId));
	};
};

export const addCourse = (newCourse: object) => {
	return async function (dispatch: Function) {
		const res: any = await addCourseService(newCourse);
		const response = await res.json();
		if (response.successful) dispatch(addCourseActionCreator(response.result));
	};
};

export const updateCourse = (course: object) => {
	return async function (dispatch: Function) {
		const res: any = await updateCourseService(course);
		const response = await res.json();
		if (response.successful)
			dispatch(updateCourseActionCreator(response.result));
	};
};
