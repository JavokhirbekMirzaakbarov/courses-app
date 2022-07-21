import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: any) {
	const role = useSelector((store: any) => store.user.role);

	return role === 'admin' ? children : <Navigate to='/courses' />;
}
