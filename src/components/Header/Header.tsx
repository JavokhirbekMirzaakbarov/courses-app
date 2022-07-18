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
	const { isAuth, name } = useSelector((state: any) => state.user);

	const logout = () => {
		dispatch(logoutUserActionCreator());
		localStorage.removeItem('userToken');
		localStorage.removeItem('userName');
		localStorage.removeItem('userEmail');
		navigate('/login');
	};

	return (
		<div className='header-container'>
			<Logo />

			<div>
				{isAuth && (
					<>
						<span>{name}</span>
						<Button btnText='Logout' onClick={logout} />
					</>
				)}
			</div>
		</div>
	);
}
