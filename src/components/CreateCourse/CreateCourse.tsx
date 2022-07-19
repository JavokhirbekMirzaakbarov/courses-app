import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Author } from '../../constants';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAuthorActionCreator } from '../../store/authors/actions';
import { addCourseActionCreator } from '../../store/courses/actions';
import './styles.scss';

export default function CreateCourse() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const allAuthors: Author[] = useSelector((state: any) => state.authors);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState<number>(0);
	const [courseAuthors, setCourseAuthors] = useState<string[]>([]);

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
				authors: courseAuthors,
				creationDate: formatCreationDate(new Date()),
			};

			dispatch(addCourseActionCreator(newCourse));
			navigate('/courses');
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
			dispatch(createAuthorActionCreator(newAuthor));
			setAuthorName('');
		}
	};

	const deleteAuthorFromCourseAuthors = (authorId: string) => {
		setCourseAuthors(courseAuthors.filter((author) => author !== authorId));
	};

	const addToCourseAuthors = (authorId: string) => {
		setCourseAuthors((prev) => [...prev, authorId]);
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
						onClick={() => navigate('/courses')}
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

					{allAuthors.map(
						(auth) =>
							!courseAuthors.includes(auth.id) && (
								<AuthorItem
									btnText='Add author'
									key={auth.id}
									author={auth}
									onClick={addToCourseAuthors}
								/>
							)
					)}

					<p className='info-heading'>Course Authors</p>
					{allAuthors.map(
						(auth) =>
							courseAuthors.includes(auth.id) && (
								<AuthorItem
									btnText='Delete author'
									key={auth.id}
									author={auth}
									onClick={deleteAuthorFromCourseAuthors}
								/>
							)
					)}
				</div>
			</div>
		</form>
	);
}
