import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuthorsService, getAllCoursesService } from './services/service';
import { setAllCoursesActionCreator } from './store/courses/actions';
import { setAllAuthorsActionCreator } from './store/authors/actions';

function App() {
	const isAuth = useSelector((state: any) => state.user.isAuth);
	const dispatch = useDispatch();

	async function getData() {
		const courses = await getAllCoursesService();
		dispatch(setAllCoursesActionCreator(courses));

		const res: any = await getAllAuthorsService();
		dispatch(setAllAuthorsActionCreator(res));
	}

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={isAuth ? <Courses /> : <Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				{isAuth && (
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
