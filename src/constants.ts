export type Course = {
	id: string;
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: string[];
};

export type Author = {
	id: string;
	name: string;
};

export type User = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
};
