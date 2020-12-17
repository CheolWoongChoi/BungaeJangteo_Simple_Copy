
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'actions';
import './OrderTab.scss';

const OrderTab = () => {
	const [type, setType] = useState('');
	const { keyword } = useSelector(state => state.app);
	const dispatch = useDispatch();

	const handleSetOrder = (type) => {
		setType(type);

		dispatch(
			getProducts({
				keyword: keyword,
				order: type,
			})
		);
	};

	return (
		<div className='order-wrap'>
			<span className={type === 'date' ? 'selected' : ''} onClick={() => handleSetOrder('date')}>최신순</span>
			<span className={type === 'price_asc' ? 'selected' : ''} onClick={() => handleSetOrder('price_asc')}>저가순</span>
			<span className={type === 'price_desc' ? 'selected' : ''} onClick={() => handleSetOrder('price_desc')}>고가순</span>
		</div>
	)

}

export default OrderTab;