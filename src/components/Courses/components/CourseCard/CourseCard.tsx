import React, { useEffect, useState } from 'react';
import Button from '../../../../common/Button/Button';
import { Author, Course } from '../../../../constants';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import './CourseCard.scss';

export default function CourseCard(props: {
	course: Course;
	authors: Author[];
}) {
	const [courseDuration, setDuration] = useState('');
	const [courseAuthors, setAuthors] = useState<Author[]>([]);

	useEffect(() => {
		setDuration(() => getCourseDuration(props.course.duration));

		setAuthors(
			props.authors.filter((author) => props.course.authors.includes(author.id))
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='course-card'>
			<div className='title'>
				<h2>{props.course.title}</h2>
				<p>{props.course.description}</p>
			</div>
			<div className='info'>
				<div className='authors'>
					<b>Authors: </b>
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
				<Button btnText='Show course' onClick={() => {}} />
			</div>
		</div>
	);
}
