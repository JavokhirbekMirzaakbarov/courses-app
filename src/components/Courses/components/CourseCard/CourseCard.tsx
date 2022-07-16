import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { Author, Course } from '../../../../constants';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { getAllAuthorsService } from '../../../../services/service';
import { setAllAuthorsActionCreator } from '../../../../store/authors/actions';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import './CourseCard.scss';
import { deleteCourseActionCreator } from '../../../../store/courses/actions';

export default function CourseCard(props: { course: Course }) {
	const [courseDuration, setDuration] = useState('');
	const [courseAuthors, setAuthors] = useState<Author[]>([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		async function getAllAuthors() {
			const res: any = await getAllAuthorsService();
			setDuration(() => getCourseDuration(props.course.duration));
			setAuthors(
				res.filter((author: any) => props.course.authors.includes(author.id))
			);
			dispatch(setAllAuthorsActionCreator(res));
		}
		getAllAuthors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (id: string) => navigate(`/courses/${id}`);
	const handleDelete = () => {
		dispatch(deleteCourseActionCreator(props.course.id));
		navigate('/courses');
	};
	return (
		<div className='course-card'>
			<div className='title'>
				<h2>{props.course.title}</h2>
				<p>{props.course.description}</p>
			</div>
			<div className='info'>
				<div className='authors'>
					<b>Authors: &nbsp;</b>
					<div className='author-list'>
						{courseAuthors.map((auth) => auth.name).join(', ')}
					</div>
				</div>
				<div>
					<b>Duration: </b>
					<span>{courseDuration}</span>
				</div>
				<div>
					<b>Created: </b>
					<span>{props.course.creationDate}</span>
				</div>
				<Button
					btnText='Show course'
					onClick={() => handleClick(props.course.id)}
				/>
				<Button onClick={handleDelete}>
					<RiDeleteBin5Line />
				</Button>
				<Button onClick={() => {}}>
					<BsPencil />
				</Button>
			</div>
		</div>
	);
}
