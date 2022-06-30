import React from 'react';
import './Button.scss';

type BtnType = {
	btnText: string;
	onClick: () => any;
};

export default function Button({ btnText, onClick }: BtnType) {
	return <button onClick={() => onClick()}>{btnText}</button>;
}
