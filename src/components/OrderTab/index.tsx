import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from 'store/app';
import classNames from 'classnames/bind';
import styles from './OrderTab.scss';

const cx = classNames.bind(styles);

function OrderTab () {
	const dispatch = useDispatch();

	const handleSetOrder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLElement;
		
		if (target?.tagName !== 'SPAN') return;

		const params = new URLSearchParams(location.search);
		const keyword = params.get('q') || '';
		const order = target?.className;

		dispatch(
			getProductsThunk({ 
				keyword,
				order
			})
		);

		history.pushState(null, '', `?q=${keyword}&order=${order}`);
	};

	return (
		<div className={cx('order-tab-wrap')}>
			<div className={cx('order-tab')}  onClick={handleSetOrder}>
				<span className={`date ${cx('selected')}`}>최신순</span>
				<span className='price_asc'>저가순</span>
				<span className='price_desc'>고가순</span>
			</div>
		</div>
	)

}

export default OrderTab;