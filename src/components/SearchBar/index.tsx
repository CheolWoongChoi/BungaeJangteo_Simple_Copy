import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from 'store/app';
import classNames from 'classnames/bind';
import styles from './SearchBar.scss';

type SearchBarProps = {
	keyword: string;
	suggests: [];
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const cx = classNames.bind(styles);

const SearchBar = ({ keyword, suggests, setKeyword }: SearchBarProps) => {
  const dispatch = useDispatch();

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    const order = params.get('order') || 'date';

    dispatch(
      getProductsThunk({
        keyword,
        order,
      })
    );

    history.pushState(null, '', `?q=${keyword}&order=${order}`);
  };

  return (
		<div className={cx('search-bar-wrap')}>
			<div className={cx('form-wrap')}>
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
				{/* <div className='suggests-wrap'>
					{console.dir(suggests)}
					{suggests.map((v, i) => (
						<li key={i}>{v.name}</li>
					))}
				</div> */}
			</div>
		</div>
  );
};

export default SearchBar;
