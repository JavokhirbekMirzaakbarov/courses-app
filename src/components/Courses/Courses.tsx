import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course, Author } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.scss';

export default function Courses(props: {
	courses: Course[];
	authors: Author[];
	searchCourse: (a: string) => void;
	createCourse: () => void;
}) {
	return (
		<div className='courses'>
			<div className='search-area'>
				<SearchBar searchCourse={props.searchCourse} />
				<Button btnText='Add new course' onClick={props.createCourse} />
			</div>

			{props.courses.map((course) => (
				<CourseCard authors={props.authors} course={course} key={course.id} />
			))}
		</div>
	);
}
