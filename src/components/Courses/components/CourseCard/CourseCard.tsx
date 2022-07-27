import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { Author, Course } from '../../../../constants';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import './CourseCard.scss';
import { deleteCourse } from '../../../../store/courses/thunk';
import { store } from '../../../../store';

export default function CourseCard(props: { course: Course }) {
	const allAuthors: Author[] = useSelector((store: any) => store.authors);
	const navigate = useNavigate();
	const { role } = useSelector((store: any) => store.user);

	const handleClick = (id: string) => navigate(`/courses/${id}`);

	const handleDelete = (id: string) => {
		store.dispatch(deleteCourse(id));
		navigate('/courses');
	};
	return (
		<div className='course-card' data-testid='course'>
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
				<div className='button-wrapper'>
					<Button
						btnText='Show course'
						onClick={() => handleClick(props.course.id)}
					/>
					{role === 'admin' && (
						<>
							{' '}
							<Button onClick={() => handleDelete(props.course.id)}>
								<RiDeleteBin5Line />
							</Button>
							<Button
								onClick={() => {
									navigate(`/courses/update/${props.course.id}`);
								}}
							>
								<BsPencil />
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
