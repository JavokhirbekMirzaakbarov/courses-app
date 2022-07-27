import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseForm from '../../CourseForm/CourseForm';
import Courses from '../Courses';

const mockedState = {
	user: {
		role: 'admin',
		isAuth: true,
	},
	courses: [
		{ name: 'JS', id: '12' },
		{ name: 'TS', id: '34' },
	],
	authors: [],
};

const mockedStore: any = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const mockedStateNoCourses = {
	user: {},
	courses: [],
	authors: [],
};

const mockedStoreNoCourses: any = {
	getState: () => mockedStateNoCourses,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('test <Courses />', () => {
	it('should display amount of CourseCard equal length of courses array', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect((await screen.findAllByTestId('course')).length).toBe(
			mockedState.courses.length
		);
	});

	it('should display 0 course card when courses are empty', async () => {
		render(
			<Provider store={mockedStoreNoCourses}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect(screen.queryAllByTestId('course').length).toBe(0);
	});

	it('courseform should be showed after a click on a button "Add new course"', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter basename=''>
					<Routes>
						<Route path='/' element={<Courses />} />
						<Route path='/courses/add' element={<CourseForm />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);

		const newCourseButton = await screen.findByText(/add new course/i);
		fireEvent.click(newCourseButton);

		const createCourse = await waitFor(() => screen.getByTestId('course-form'));
		expect(createCourse).toBeInTheDocument();
	});
});
