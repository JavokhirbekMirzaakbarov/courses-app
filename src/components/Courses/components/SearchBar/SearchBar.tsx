import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';

export default function SearchBar(props: {
	searchCourse: (a: string) => void;
}) {
	const [search, setSearch] = useState('');

	function handleSearch(data: any) {
		data.preventDefault();
		props.searchCourse(search);
	}

	return (
		<form onSubmit={handleSearch}>
			<Input
				placeholder='Enter course name'
				name='search'
				value={search}
				onChange={(e: any) => {
					setSearch(e.target.value);
				}}
			/>
			<button type='submit'>SEARCH</button>
		</form>
	);
}
