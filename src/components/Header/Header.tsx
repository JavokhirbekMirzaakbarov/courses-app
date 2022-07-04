import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header() {
	return (
		<div className='header-container'>
			<Logo />
			<div>
				<span>Javokhirbek</span>
				<Button btnText='Logout' onClick={() => {}} />
			</div>
		</div>
	);
}
