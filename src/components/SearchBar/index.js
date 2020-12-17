
import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './SearchBar.scss';

const SearchBar = ({ keyword, setKeyword }) => {
	const dispatch = useDispatch();

	const onChangeKeyword = e => {
		setKeyword(e.target.value);
	}

	const onSubmitKeyword = e => {
		const params = new URLSearchParams(location.search);
		const order = params.get('order') || 'date';

		e.preventDefault();
		history.pushState(null, null, `?q=${keyword}&order=${order}`);

		dispatch(
			getProducts({ 
				keyword, 
				order
			})
		);
	}

	return(
		<form className='search-bar-wrap' onSubmit={onSubmitKeyword}>
			<input type='text' name='keyword' autoComplete='off' value={keyword} onChange={onChangeKeyword}/>
			<input type='submit' value='검색' />
		</form>
	);
}

export default SearchBar;