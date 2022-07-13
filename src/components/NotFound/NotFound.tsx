import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h2>The resource you are looking for may not be available!</h2>
			<h2>
				Please <Link to='/login'>login!</Link>
			</h2>
		</div>
	);
}
