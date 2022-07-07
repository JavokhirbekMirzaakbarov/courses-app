import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const [token, setToken] = useState('');
	// const [showCreateCourse, setShowCreateCourse] = useState(false);

	// const toggleCreateCourse = () => {
	// 	setShowCreateCourse(!showCreateCourse);
	// };

	const checkForToken = () => {
		setToken(localStorage.getItem('userToken')!);
	};

	useEffect(() => {
		checkForToken();
	}, []);
	// if (!token) navigate('/courses');

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/register' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='*' element={token ? <Courses /> : <Login />} />
			</Routes>
			{/*
			{showCreateCourse ? (
				<CreateCourse toggleCreateCourse={toggleCreateCourse} />
			) : (
				<Courses toggleCreateCourse={toggleCreateCourse} />
			)} */}
		</BrowserRouter>
	);
}

export default App;
