import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { logoutUserActionCreator } from '../../store/user/actions';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state: any) => state.user.isAuth);
	const name = useSelector((state: any) => state.user.name);

	const logout = () => {
		dispatch(logoutUserActionCreator());
		localStorage.removeItem('userToken');
		navigate('/login');
	};

	return (
		<div className='header-container'>
			<Logo />

			<div>
				{isLoggedIn && (
					<>
						<span>{name}</span>
						<Button btnText='Logout' onClick={logout} />
					</>
				)}
			</div>
		</div>
	);
}
