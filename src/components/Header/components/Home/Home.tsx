import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const token = localStorage.getItem('userToken');
	const navigate = useNavigate();

	token ? navigate('/courses') : navigate('/login');
	return <></>;
}
