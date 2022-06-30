import React from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Author } from '../../constants';
import AuthorItem from './components/AuthorItem/AuthorItem';
import './styles.scss';

export default function CreateCourse(props: {
	createCourse: () => void;
	authors: Author[];
}) {
	return (
		<div className='container'>
			<div className='title-area'>
				<div>
					<Input label='Title' placeholder='Enter title...' />
				</div>
				<Button btnText='Create Course' onClick={props.createCourse} />
			</div>
			<p>Description</p>
			<textarea placeholder='Enter description...' cols={30} rows={40} />
			<div className='book-info'>
				<div className='add-author'>
					<p className='info-heading'>Add author</p>
					<p>Author Name</p>
					<Input placeholder='Enter author name ...' />
					<Button btnText='Create Author' onClick={() => {}} />
					<p className='info-heading'>Duration</p>
					<Input placeholder='Enter duration in minutes...' />
					<div>Duration: 00:00 hours</div>
				</div>
				<div className='authors'>
					<p className='info-heading'>Authors</p>

					{props.authors.map((auth) => (
						<AuthorItem author={auth} onClick={() => {}} />
					))}

					<p className='info-heading'>Course Authors</p>
				</div>
			</div>
		</div>
	);
}
