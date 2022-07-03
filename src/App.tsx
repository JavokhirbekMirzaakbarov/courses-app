import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import './App.css';

function App() {
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const toggleCreateCourse = () => {
		setShowCreateCourse(!showCreateCourse);
	};

	return (
		<>
			<Header />
			{showCreateCourse ? (
				<CreateCourse toggleCreateCourse={toggleCreateCourse} />
			) : (
				<Courses toggleCreateCourse={toggleCreateCourse} />
			)}
		</>
	);
}

export default App;
