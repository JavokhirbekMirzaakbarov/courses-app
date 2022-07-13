import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginService } from '../../services/service';
import './styles.scss';

export default function Login(props: { login: () => any }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const loginUser = async (e: any) => {
		e.preventDefault();

		if (!email || !password) {
			alert('Invalid input! Try again!');
		} else {
			const res: any = await loginService({ email, password });

			if (res.status === 200) {
				localStorage.setItem('userToken', JSON.stringify(res.result!));
				localStorage.setItem('userName', JSON.stringify(res.user?.name!));
				props.login();
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
