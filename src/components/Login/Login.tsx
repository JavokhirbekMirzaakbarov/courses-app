import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './styles.scss';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const loginUser = async (e: any) => {
		e.preventDefault();
		const newUser = {
			email,
			password,
		};

		const res = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});
		const response: {
			successful: Boolean;
			errors?: String[];
			result?: string;
			user?: {
				name: string;
				email: string;
			};
		} = await res.json();

		if (response.successful) {
			console.log(response);
			localStorage.setItem('userToken', response.result!);
			localStorage.setItem('userName', response.user?.name!);
			navigate('/courses');
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
