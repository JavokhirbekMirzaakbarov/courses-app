import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { getAllCourses } from '../../helpers/getCourseData';
import './Courses.scss';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
	const allCourses = getAllCourses();
	const [courses, setCourses] = useState<Course[]>(allCourses);
	const navigate = useNavigate();

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
					onClick={() => navigate('/courses/add')}
				/>
			</div>

			{courses.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	);
}
