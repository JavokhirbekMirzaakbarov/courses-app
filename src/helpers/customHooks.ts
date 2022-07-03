import { useState } from 'react';
import { Author, Course } from '../constants';
import { mockedAuthorsList, mockedCoursesList } from '../data';

export const useCourses = () => {
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);

	const addCourse = (newCourse: Course) => {
		setCourses((prev: Course[]) => [...prev, newCourse]);
	};

	return { courses, addCourse };
};

export const useAuthors = () => {
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);

	const addAuthor = (newAuthor: Author) => {
		setAuthors((prev: Author[]) => [...prev, newAuthor]);
	};

	return { authors, addAuthor };
};
