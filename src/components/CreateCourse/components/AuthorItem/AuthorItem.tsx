import React from 'react';
import Button from '../../../../common/Button/Button';
import { Author } from '../../../../constants';
import './AuthorItem.scss';

export default function AuthorItem(props: {
	author: Author;
	onClick: (a: string) => void;
	btnText: string;
}) {
	return (
		<div className='author-item'>
			{props.author.name}
			<Button
				btnText={props.btnText}
				onClick={() => props.onClick(props.author.id)}
			/>
		</div>
	);
}
