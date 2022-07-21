import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginService } from '../../services/service';
import { loginUserActionCreator } from '../../store/user/actions';
import './styles.scss';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	React.useEffect(() => {
		navigate('/login');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const navigate = useNavigate();

	const loginUser = async (e: any) => {
		e.preventDefault();

		if (!email || !password) {
			alert('Invalid input! Try again!');
		} else {
			const res: any = await loginService({ email, password });

			if (res.status === 200) {
				localStorage.setItem('userToken', res.result!);

				dispatch(
					loginUserActionCreator({
						isAuth: true,
						token: res.result,
					})
				);
				navigate('/courses');
			}
		}
	};

	return (
		<form className='login' onSubmit={loginUser}>
			<h2>Login</h2>
			<Input
				label='Email'
				placeholder='Enter email'
				value={email}
				onChange={(e: any) => setEmail(e.target.value)}
			/>
			<Input
				label='Password'
				placeholder='Enter password'
				type='password'
				value={password}
				onChange={(e: any) => setPassword(e.target.value)}
			/>
			<Button btnText='Login' type='submit' />
			<p>
				If you don't have an account, you can{' '}
				<Link to='/register'>Register</Link>
			</p>
		</form>
	);
}
