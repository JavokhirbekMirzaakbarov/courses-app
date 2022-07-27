import { coursesReducer } from '../courses/reducer';
import { ADD_COURSE } from '../courses/types';

describe('coursesReducer test', () => {
	it('should return initial state', () => {
		expect(coursesReducer([], {})).toEqual([]);
	});

	it('should save course and return a new state', () => {
		const previousState: any = [];
		expect(
			coursesReducer(previousState, {
				type: ADD_COURSE,
				payload: {
					course: { title: 'Some course' },
				},
			})
		).toEqual([{ title: 'Some course' }]);
	});
});
