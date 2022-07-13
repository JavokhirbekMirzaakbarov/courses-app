import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { registerUser } from '../../services/service';
import './styles.scss';

export default function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const register = async (e: any) => {
		e.preventDefault();
		if (!name && !email && !password) {
			alert('Invalid input! Try again!');
			setName('');
			setEmail('');
			setPassword('');
		} else {
			const response: any = await registerUser({ name, email, password });
			if (response.status === 200) {
				alert(JSON.stringify(response.data.result));
				navigate('/login');
			} else {
				alert(JSON.stringify(response.errors));
			}
		}
	};

	return (
		<form className='registration' onSubmit={register}>
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
