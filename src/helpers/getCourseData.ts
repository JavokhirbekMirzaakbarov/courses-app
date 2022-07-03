import { Course } from '../constants';
import { mockedCoursesList } from '../data';

export const getAllCourses = () => mockedCoursesList;

export const addCourse = (a: Course) => {
	mockedCoursesList.push(a);
};
