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
