import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { store } from '../../store';
import { logoutUserActionCreator } from '../../store/user/actions';
import { getCurrentUser } from '../../store/user/thunk';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuth, name } = useSelector((store: any) => store.user);
	// const token = localStorage.getItem('userToken');

	const logout = () => {
		dispatch(logoutUserActionCreator());
		localStorage.removeItem('userToken');
		navigate('/login');
	};

	useEffect(() => {
		if (isAuth) {
			const user = getCurrentUser();
			store.dispatch(user);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	return (
		<div className='header-container'>
			<Logo />

			<div>
				{isAuth && (
					<>
						<span>{name || 'User'}</span>
						<Button btnText='Logout' onClick={logout} />
					</>
				)}
			</div>
		</div>
	);
}
