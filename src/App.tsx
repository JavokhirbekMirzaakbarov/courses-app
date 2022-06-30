import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList as authors } from './components/Courses/data';
import { mockedCoursesList as initialCourses } from './components/Courses/data';
import './App.css';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [courses, setCourses] = useState(initialCourses);
	const [showCreateCourse, setShowCreateCourse] = useState(false);
	function searchCourse(term: string) {
		setCourses(
			initialCourses.filter((course) =>
				course.title.toLowerCase().includes(term.toLowerCase())
			)
		);
	}

	function toggleCreateCourse() {
		setShowCreateCourse(!showCreateCourse);
	}
	return (
		<>
			<Header />
			{showCreateCourse ? (
				<CreateCourse authors={authors} createCourse={toggleCreateCourse} />
			) : (
				<Courses
					searchCourse={searchCourse}
					courses={courses}
					authors={authors}
					createCourse={toggleCreateCourse}
				/>
			)}
		</>
	);
}

export default App;
