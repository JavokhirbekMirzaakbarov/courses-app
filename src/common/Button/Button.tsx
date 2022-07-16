import React, { ReactNode } from 'react';
import './Button.scss';

export default function Button(props: {
	type?: 'button' | 'submit';
	onClick?: (a?: any) => void;
	btnText?: string;
	children?: ReactNode;
}) {
	return (
		<button
			type={props.type}
			onClick={() => {
				props.onClick?.();
			}}
		>
			{props.btnText || props.children}
		</button>
	);
}
