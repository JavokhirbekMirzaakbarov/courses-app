import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { getAllCoursesService } from '../../services/service';
import './Courses.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCoursesActionCreator } from '../../store/courses/actions';

export default function Courses() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const allCourses = useSelector((state: any) => state.courses);
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		async function getCourses() {
			const res = await getAllCoursesService();
			setCourses(res);
			dispatch(setAllCoursesActionCreator(res));
		}
		getCourses();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const searchCourse = (term: string) => {
		setCourses(
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
				<Button
					type='button'
					btnText='Add new course'
					onClick={() => navigate('/courses/add')}
				/>
			</div>

			{courses.map((course: Course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	);
}
