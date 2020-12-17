
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './SearchBar.scss';

const SearchBar = () => {
	const [ keyword, setText ] = useState('');
	const dispatch = useDispatch();

	const onChangeText = e => {
		setText(e.target.value);
	}

	const onEnterKeyword = e => {
		// e.preventDefault();
	
		console.log(e.target);

		// dispatch(getProducts({
		// 	keyword: keyword,
		// 	order: 'date'
		// }));
	}

	return(
		<>
			<img src='https://tistory1.daumcdn.net/tistory/79335/skin/images/arrow_top.png' align='right' />

			<form target='_blank' onSubmit={onEnterKeyword}>
				<input type='color' name='test' />
				<input type='submit' value='검색' />
			</form>
		</>
	);
}

export default SearchBar;