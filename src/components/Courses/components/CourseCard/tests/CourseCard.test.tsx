import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseCard from '../CourseCard';

const mockedState: any = {
	user: {
		role: 'admin',
	},
	courses: [
		{
			title: 'JS',
			description: 'description',
			authors: ['123', '456'],
			creationDate: '26 July',
			duration: 200,
		},
	],
	authors: [
		{ id: '123', name: 'Jack' },
		{ id: '456', name: 'Justin' },
	],
};

const mockedStore: any = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('test <CourseCard />', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<CourseCard course={mockedState.courses[0]} />
				</Provider>
			</BrowserRouter>
		);
	});

	test('should display title', () => {
		expect(screen.queryByText('JS')).toBeInTheDocument();
	});

	test('should display description', () => {
		expect(screen.queryByText('description')).toBeInTheDocument();
	});

	test('should display authors', () => {
		expect(screen.queryByText('Jack, Justin')).toBeInTheDocument();
	});

	test('should display duration', () => {
		expect(screen.queryByText('03:20 hours')).toBeInTheDocument();
	});

	test('should display created date', () => {
		expect(screen.queryByText('26 July')).toHaveTextContent('26 July');
	});
});
