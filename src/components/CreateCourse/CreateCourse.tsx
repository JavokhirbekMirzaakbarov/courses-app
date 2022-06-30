import React, { useEffect, useId, useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Author, Course } from '../../constants';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import './styles.scss';

export default function CreateCourse(props: {
	createCourse: () => void;
	authors: Author[];
	addAuthor: (a: Author) => void;
	addCourse: (c: Course) => void;
}) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
	const [otherAuthors, setOtherAuthors] = useState<Author[]>(props.authors);

	const handleSubmit = (e: any) => {
		let authorsWithOnlyIDs = courseAuthors.map((author) => author.id);
		const newCourse = {
			id: generateId(),
			title,
			description,
			duration,
			authors: authorsWithOnlyIDs,
			creationDate: formatCreationDate(new Date()),
		};
		props.addCourse(newCourse);
	};

	useEffect(() => {
		const rem = props.authors.filter(
			(author) => !courseAuthors.includes(author)
		);
		setOtherAuthors(rem);
	}, [props.authors]);

	const generateId = () => {
		const id = Math.floor(Math.random() * 100 + 1);
		return String(id);
	};

	const createAuthor = () => {
		if (authorName.length < 2) {
			alert('Author Name should be at least 2 characters long!');
		} else {
			const newAuthor: Author = {
				id: generateId(),
				name: authorName,
			};
			props.addAuthor(newAuthor);
			setAuthorName('');
		}
	};

	const deleteAuthor = (authorId: string) => {
		setCourseAuthors(courseAuthors.filter((author) => author.id !== authorId));
		let deletedAuthor = courseAuthors.filter(
			(author) => author.id === authorId
		);
		setOtherAuthors((prev: any) => [...prev, ...deletedAuthor]);
	};

	const addAuthor = (authorId: string) => {
		const newAuthor = props.authors.filter((author) => author.id === authorId);
		setCourseAuthors((prev) => [...prev, ...newAuthor]);
		setOtherAuthors((prev) => prev.filter((author) => author.id !== authorId));
	};

	return (
		<form onSubmit={handleSubmit} className='container'>
			<div className='title-area'>
				<div>
					<Input
						value={title}
						onChange={(e: any) => setTitle(e.target.value)}
						label='Title'
						placeholder='Enter title...'
						minLength={2}
					/>
				</div>
				<button type='submit'>Create Course</button>
			</div>
			<p>Description</p>
			<textarea
				onChange={(e: any) => setDescription(e.target.value)}
				value={description}
				minLength={2}
				placeholder='Enter description...'
				cols={30}
				rows={40}
			/>
			<div className='book-info'>
				<div className='add-author'>
					<p className='info-heading'>Add author</p>
					<p>Author Name</p>
					<Input
						value={authorName}
						minLength={2}
						onChange={(e: any) => setAuthorName(e.target.value)}
						placeholder='Enter author name ...'
					/>
					<Button btnText='Create Author' onClick={createAuthor} />
					<p className='info-heading'>Duration</p>
					<Input
						value={duration}
						onChange={(e: any) => setDuration(e.target.value)}
						placeholder='Enter duration in minutes...'
					/>
					<div>Duration: {getCourseDuration(duration)}</div>
				</div>
				<div className='authors'>
					<p className='info-heading'>Authors</p>

					{otherAuthors.map((auth) => (
						<AuthorItem
							btnText='Add author'
							key={auth.id}
							author={auth}
							onClick={addAuthor}
						/>
					))}

					<p className='info-heading'>Course Authors</p>
					{courseAuthors.map((auth) => (
						<AuthorItem
							btnText='Delete author'
							key={auth.id}
							author={auth}
							onClick={deleteAuthor}
						/>
					))}
				</div>
			</div>
		</form>
	);
}
