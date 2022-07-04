import React from 'react';
import './Button.scss';

export default function Button(props: {
	type?: 'button' | 'submit';
	onClick?: (a?: any) => void;
	btnText: string;
}) {
	return (
		<button
			type={props.type}
			onClick={() => {
				props.onClick?.();
			}}
		>
			{props.btnText}
		</button>
	);
}
