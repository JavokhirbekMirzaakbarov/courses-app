import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Courses.scss';

export default function Courses() {
	const navigate = useNavigate();
	const allCourses = useSelector((store: any) => store.courses);
	const [searchResults, setSearchResults] = useState<Course[]>([]);
	const { role } = useSelector((store: any) => store.user);

	const searchCourse = (term: string) => {
		setSearchResults(
			allCourses.filter(
				(course: Course) =>
					course.title.toLowerCase().includes(term.toLowerCase()) ||
					course.id.toLowerCase().includes(term.toLowerCase())
			)
		);
	};

	return (
		<div className='courses'>
			<div className='search-area'>
				<SearchBar searchCourse={searchCourse} />
				{role === 'admin' && (
					<Button
						type='button'
						btnText='Add new course'
						data-testid='add-new-course-button'
						onClick={() => navigate('/courses/add')}
					/>
				)}
			</div>

			{searchResults.length === 0
				? allCourses.map((course: Course) => (
						<CourseCard course={course} key={course.id} />
				  ))
				: allCourses
						.filter((course: Course) => searchResults.includes(course))
						.map((course: any) => (
							<CourseCard course={course} key={course.id} />
						))}
		</div>
	);
}
