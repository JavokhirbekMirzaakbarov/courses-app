import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const token = localStorage.getItem('userToken');
	const isLoggedIn = useSelector((state: any) => state.user.isAuth);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={token ? <Courses /> : <Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				{isLoggedIn && (
					<>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/add' element={<CreateCourse />} />
						<Route path='/courses/:courseId' element={<CourseInfo />} />{' '}
					</>
				)}

				<Route path='*' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
