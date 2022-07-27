import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test name',
		email: '',
	},
	courses: [],
	authors: [],
};

const mockedStore: any = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header renders correctly', () => {
	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	});
	test('Header should display name and logo', () => {
		expect(screen.getByText('Test name')).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
	});
});
