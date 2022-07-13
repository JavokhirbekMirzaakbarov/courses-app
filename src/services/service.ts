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
