import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Author } from '../../constants';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { addCourse } from '../../helpers/getCourseData';
import { addAuthor } from '../../helpers/getAuthorData';
import { getAllAuthors } from '../../helpers/getAuthorData';
import './styles.scss';

export default function CreateCourse(props: {
	toggleCreateCourse: () => void;
}) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState<number>(0);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
	const [otherAuthors, setOtherAuthors] = useState<Author[]>(getAllAuthors());

	const handleSubmit = () => {
		if (
			title.length < 2 &&
			description.length < 2 &&
			courseAuthors.length < 1 &&
			duration <= 0
		) {
			alert('Invalid input! Try again!');
		} else {
			const newCourse = {
				id: generateId(),
				title,
				description,
				duration,
				authors: courseAuthors.map((author) => author.id),
				creationDate: formatCreationDate(new Date()),
			};

			addCourse(newCourse);
			props.toggleCreateCourse();
		}
	};

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
			addAuthor(newAuthor);
			setAuthorName('');
		}
	};

	const deleteAuthorFromCourseAuthors = (authorId: string) => {
		setCourseAuthors(courseAuthors.filter((author) => author.id !== authorId));
		let deletedAuthor = courseAuthors.filter(
			(author) => author.id === authorId
		);
		setOtherAuthors((prev: any) => [...prev, ...deletedAuthor]);
	};

	const addToCourseAuthors = (authorId: string) => {
		const newAuthor = otherAuthors.filter((author) => author.id === authorId);
		setCourseAuthors([...courseAuthors, ...newAuthor]);
		setOtherAuthors((prev) => prev.filter((author) => author.id !== authorId));
	};

	return (
		<form className='container'>
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
				<div>
					<Button
						type='button'
						btnText='Create Course'
						onClick={handleSubmit}
					/>
					<Button
						type='button'
						btnText='Back to Courses'
						onClick={props.toggleCreateCourse}
					/>
				</div>
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
					<Button
						type='button'
						btnText='Create Author'
						onClick={createAuthor}
					/>
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
							onClick={addToCourseAuthors}
						/>
					))}

					<p className='info-heading'>Course Authors</p>
					{courseAuthors.map((auth) => (
						<AuthorItem
							btnText='Delete author'
							key={auth.id}
							author={auth}
							onClick={deleteAuthorFromCourseAuthors}
						/>
					))}
				</div>
			</div>
		</form>
	);
}
