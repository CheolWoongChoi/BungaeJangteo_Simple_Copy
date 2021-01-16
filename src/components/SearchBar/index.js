import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getSuggests } from 'actions';
import './SearchBar.scss';

const SearchBar = ({ keyword, suggests, setKeyword }) => {
  const dispatch = useDispatch();

  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const onSubmitKeyword = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    const order = params.get('order') || 'date';

    dispatch(
      getProducts({
        keyword,
        order,
      })
    );

    history.pushState(null, null, `?q=${keyword}&order=${order}`);
  };

  return (
		<div className='search-bar-wrap'>
			<div className='form-wrap'>
				<form onSubmit={onSubmitKeyword}>
					<input
						type='text'
						name='keyword'
						autoComplete='off'
						value={keyword}
						onChange={onChangeKeyword}
					/>
					<input type='submit' value='검색' />
				</form>
				<div className='suggests-wrap'>
					{console.dir(suggests)}
					{suggests.map((v, i) => (
						<li key={i}>{v.name}</li>
					))}
				</div>
			</div>
		</div>
  );
};

export default SearchBar;
