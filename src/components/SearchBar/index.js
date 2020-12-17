
import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './SearchBar.scss';

const SearchBar = ({ keyword, order, setKeyword }) => {
	const dispatch = useDispatch();

	const onChangeKeyword = e => {
		setKeyword(e.target.value);
	}

	const onEnterKeyword = e => {
		e.preventDefault();

		if (!keyword) {
			alert('검색어를 입력하세요!');
			return;
		}

		dispatch(
			getProducts({ keyword, order })
		);
	}

	return(
		<form className='search-bar-wrap' onSubmit={onEnterKeyword}>
			<input type='text' name='keyword' value={keyword} onChange={onChangeKeyword}/>
			<input type='submit' value='검색' />
		</form>
	);
}

export default SearchBar;