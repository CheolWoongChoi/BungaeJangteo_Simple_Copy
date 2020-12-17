
import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './OrderTab.scss';

const OrderTab = () => {
	const dispatch = useDispatch();

	const handleSetOrder = (e) => {
		const params = new URLSearchParams(location.search);

		dispatch(
			getProducts({ 
				keyword: params.get('q') || '', 
				order: e.target.className 
			})
		);

		document.querySelector('.order-tab .selected')?.classList.remove('selected'); 
		e.target.classList.add('selected');
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