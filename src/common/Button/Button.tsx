import React from 'react';
import './Button.scss';

export default function Button(props: any) {
	return (
		<button type={props.type} onClick={() => props.onClick()}>
			{props.btnText}
		</button>
	);
}
