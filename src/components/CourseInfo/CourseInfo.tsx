import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Author, Course } from '../../constants';
import './styles.scss';
import { useSelector } from 'react-redux';

export default function CourseInfo() {
	const [course, setCourse] = useState<Course>();
	const [courseAuthors, setCourseAuthors] = useState<Author[]>();
	const { courseId } = useParams();
	const courses = useSelector((store: any) => store.courses);
	const authors = useSelector((store: any) => store.authors);

	const getCourse = (id: string) => {
		setCourse(courses.find((course: Course) => course.id === id));
	};

	const getAuthors = () => {
		setCourseAuthors(
			authors.filter((author: Author) => course?.authors.includes(author.id))
		);
	};

	useEffect(() => {
		getCourse(courseId!);
		getAuthors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='course-container'>
			<Link to='/courses'>&lt; Back to Courses</Link>
			<h1>{course?.title}</h1>
			<div className='card-info'>
				<div className='description'>{course?.description}</div>
				<div>
					<div>
						<b>ID: </b> {course?.id}
					</div>

					<div>
						<b>Duration: </b>
						<span>{course?.duration}</span>
					</div>

					<div>
						<b>Created: </b>
						<span>{course?.creationDate}</span>
					</div>

					<div>
						<b>Authors: </b>
						{courseAuthors?.map((auth) => (
							<div>{auth.name}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
