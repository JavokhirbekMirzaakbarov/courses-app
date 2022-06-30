import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList as mockedAuthors } from './components/Courses/data';
import { mockedCoursesList as initialCourses } from './components/Courses/data';
import './App.css';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Author, Course } from './constants';

function App() {
	const [courses, setCourses] = useState(initialCourses);
	const [showCreateCourse, setShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState<Author[]>(mockedAuthors);

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

	function addAuthor(author: Author) {
		setAuthors((prev) => [...prev, author]);
	}

	function addCourse(course: Course) {
		setCourses((prev: any) => [...prev, course]);
	}

	return (
		<>
			<Header />
			{showCreateCourse ? (
				<CreateCourse
					addAuthor={addAuthor}
					authors={authors}
					createCourse={toggleCreateCourse}
					addCourse={addCourse}
				/>
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
