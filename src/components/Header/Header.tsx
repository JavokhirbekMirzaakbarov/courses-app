import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header() {
	const [name, setName] = useState('');
	const location = useLocation();

	useEffect(() => {
		setName(localStorage.getItem('userName')!);
	}, []);
	return (
		<div className='header-container'>
			<Logo />

			{!(
				location.pathname === '/register' || location.pathname === '/login'
			) && (
				<div>
					<span>{name}</span>
					<Button
						btnText='Logout'
						onClick={() => {
							localStorage.removeItem('userName');
							localStorage.removeItem('userToken');
						}}
					/>
				</div>
			)}
		</div>
	);
}
