import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './styles.scss';

export default function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const registerUser = async (e: any) => {
		e.preventDefault();
		const newUser = {
			name,
			email,
			password,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});
		const data: {
			successful: Boolean;
			errors?: String[];
			result?: String;
		} = await response.json();

		if (data.successful) {
			alert(data.result);
			navigate('/login');
		} else {
			alert(data.errors);
		}
	};

	return (
		<form className='registration' onSubmit={registerUser}>
			<h2>Registration</h2>
			<Input
				label='Name'
				placeholder='Enter name'
				value={name}
				onChange={(e: any) => setName(e.target.value)}
			/>
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
			<Button btnText='Registration' type='submit' />
			<p>
				If you have an account, you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
}
