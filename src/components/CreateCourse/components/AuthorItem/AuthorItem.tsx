import React from 'react';
import Button from '../../../../common/Button/Button';
import { Author } from '../../../../constants';
import './AuthorItem.scss';

export default function AuthorItem(props: {
	author: Author;
	onClick: () => void;
}) {
	return (
		<div className='author-item'>
			{props.author.name}
			<Button btnText='Add author' onClick={props.onClick} />
		</div>
	);
}
