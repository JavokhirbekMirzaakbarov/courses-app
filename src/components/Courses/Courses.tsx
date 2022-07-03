import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { getAllCourses } from '../../helpers/getCourseData';
import './Courses.scss';

export default function Courses(props: { toggleCreateCourse: () => void }) {
	const allCourses = getAllCourses();
	const [courses, setCourses] = useState<Course[]>(allCourses);

	const searchCourse = (term: string) => {
		setCourses(
			allCourses.filter(
				(course) =>
					course.title.toLowerCase().includes(term.toLowerCase()) ||
					course.id.toLowerCase().includes(term.toLowerCase())
			)
		);
	};

	return (
		<div className='courses'>
			<div className='search-area'>
				<SearchBar searchCourse={searchCourse} />
				<Button
					type='button'
					btnText='Add new course'
					onClick={props.toggleCreateCourse}
				/>
			</div>

			{courses.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	);
}
