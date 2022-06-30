import React, { useEffect, useState } from 'react';
import Button from '../../../../common/Button/Button';
import { Author, Course } from '../../../../constants';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
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
	}, []);

	// overflow-hidden white-space nowrap text-overflow: elipses
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
					<span>{formatCreationDate(props.course.creationDate)}</span>
				</div>
				<Button btnText='Show course' onClick={() => {}} />
			</div>
		</div>
	);
}
