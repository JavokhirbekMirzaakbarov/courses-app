import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import './App.css';

function App() {
	const [isLoggedIn, setLoggedIn] = useState(
		JSON.parse(localStorage.getItem('isLoggedIn')!) || false
	);

	const logout = () => {
		localStorage.removeItem('userName');
		localStorage.removeItem('userToken');
		setLoggedIn(false);
	};

	const login = () => {
		setLoggedIn(true);
	};

	useEffect(() => {
		localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
	}, [isLoggedIn]);

	return (
		<BrowserRouter>
			<Header isLoggedIn={isLoggedIn} logout={logout} />
			<Routes>
				<Route
					path='/'
					element={isLoggedIn ? <Courses /> : <Login login={login} />}
				/>
				<Route path='/login' element={<Login login={login} />} />
				<Route path='/register' element={<Registration />} />
				{isLoggedIn && (
					<>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/add' element={<CreateCourse />} />
						<Route path='/courses/:courseId' element={<CourseInfo />} />{' '}
					</>
				)}

				<Route path='*' element={<Login login={login} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
