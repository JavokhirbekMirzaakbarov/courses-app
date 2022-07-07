import React from 'react';
import { useId } from 'react';
import './Input.scss';

export default function Input({
	label = '',
	name = '',
	type = 'text',
	...props
}) {
	const id = useId();
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<br />
			<input id={id} name={name} type={type} {...props} />
		</>
	);
}
