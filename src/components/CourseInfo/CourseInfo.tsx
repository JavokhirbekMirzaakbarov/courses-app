import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Author, Course } from '../../constants';
import { getAllCourses } from '../../helpers/getCourseData';
import { getAllAuthors } from '../../helpers/getAuthorData';

export default function CourseInfo() {
	const [course, setCourse] = useState<Course>();
	const [courseAuthors, setCourseAuthors] = useState<Author[]>();
	const { courseId } = useParams();

	const getCourse = (id: string) => {
		setCourse(getAllCourses().find((course: Course) => course.id === id));
	};

	const getAuthors = () => {
		setCourseAuthors(
			getAllAuthors().filter((author: Author) =>
				course?.authors.includes(author.id)
			)
		);
	};

	useEffect(() => {
		getCourse(courseId!);
		getAuthors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Link to='/courses'>&lt; Back to Courses</Link>
			<h1>{course?.title}</h1>
			<div className='info'>
				<div className='authors'>
					<b>Authors: </b>
					<div className='author-list'>
						{courseAuthors?.map((auth) => auth.name).join(', ')}
					</div>
				</div>
				<div>
					<b>Duration: </b>
					<span>{course?.duration}</span>
				</div>
				<div>
					<b>Created: </b>
					<span>{course?.creationDate}</span>
				</div>
			</div>
		</div>
	);
}
