export const registerUser = async (user: object) => {
	const response = await fetch('http://localhost:4000/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	const data = await response.json();

	if (data.successful) {
		return {
			status: 200,
			data,
		};
	} else {
		return {
			status: 404,
			errors: data.errors,
		};
	}
};

export const loginService = async (user: {
	email: string;
	password: string;
}) => {
	const res = await fetch('http://localhost:4000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	const response: {
		successful: Boolean;
		errors?: String[];
		result?: string;
		user?: {
			name: string;
			email: string;
		};
	} = await res.json();

	if (response.successful) {
		return {
			...response,
			status: 200,
		};
	} else {
		return {
			status: 404,
			errors: response.errors,
		};
	}
};

export const logoutService = async () => {
	const res = await fetch('http://localhost:4000/logout', {
		method: 'DELETE',
		headers: {
			Authorization: `${localStorage.getItem('userToken')}`,
		},
	});

	return res;
};

export const getAllCoursesService = async () => {
	const response = await fetch('http://localhost:4000/courses/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	return data.result;
};

export const getAllAuthorsService = async () => {
	const response = await fetch('http://localhost:4000/authors/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (data.successful) return data.result;
};

export const getUserInfoService = async () => {
	const response = await fetch('http://localhost:4000/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('userToken')}`,
		},
	});

	const data = await response.json();
	return data.result;
};

export const deleteCourseService = async (courseId: string) => {
	const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('userToken')}`,
		},
	});

	return response;
};

export const addAuthorService = async (name: string) => {
	const response = await fetch(`http://localhost:4000/authors/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('userToken')}`,
		},
		body: JSON.stringify({ name }),
	});

	return response;
};

export const addCourseService = async (newCourse: object) => {
	const response = await fetch(`http://localhost:4000/courses/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('userToken')}`,
		},
		body: JSON.stringify(newCourse),
	});

	return response;
};

export const updateCourseService = async (course: any) => {
	const response = await fetch(`http://localhost:4000/courses/${course.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('userToken')}`,
		},
		body: JSON.stringify(course),
	});

	return response;
};
