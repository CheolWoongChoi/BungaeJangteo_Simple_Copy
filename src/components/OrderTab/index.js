
import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './OrderTab.scss';

const OrderTab = () => {
	const dispatch = useDispatch();

	const handleSetOrder = (e) => {
		if (e.target.tagName !== 'SPAN') return;

		const params = new URLSearchParams(location.search);
		const keyword = params.get('q') || '';
		const order = e.target.className;

		dispatch(
			getProducts({ 
				keyword,
				order
			})
		);

		history.pushState(null, null, `?q=${keyword}&order=${order}`);
	};

	return (
		<div className='order-tab-wrap'>
			<div className='order-tab'  onClick={handleSetOrder}>
				<span className='date selected'>최신순</span>
				<span className='price_asc'>저가순</span>
				<span className='price_desc'>고가순</span>
			</div>
		</div>
	)

}

export default OrderTab;