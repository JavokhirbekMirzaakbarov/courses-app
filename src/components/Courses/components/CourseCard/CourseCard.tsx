import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { Author, Course } from '../../../../constants';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import { deleteCourseActionCreator } from '../../../../store/courses/actions';
import './CourseCard.scss';

export default function CourseCard(props: { course: Course }) {
	const [courseDuration, setDuration] = useState('');
	const [courseAuthors, setAuthors] = useState<Author[]>([]);
	const allAuthors: Author[] = useSelector((store: any) => store.authors);
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
						{allAuthors
							.filter((auth) => props.course.authors.includes(auth.id))
							.map((auth) => auth.name)
							.join(', ')}
					</div>
				</div>
				<div>
					<b>Duration: </b>
					<span>{getCourseDuration(props.course.duration)}</span>
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
