import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header(props: {
	isLoggedIn: boolean;
	logout: () => any;
}) {
	return (
		<div className='header-container'>
			<Logo />

			<div>
				{props.isLoggedIn && (
					<>
						<span>{JSON.parse(localStorage.getItem('userName')!)}</span>
						<Button btnText='Logout' onClick={props.logout} />
					</>
				)}
			</div>
		</div>
	);
}
