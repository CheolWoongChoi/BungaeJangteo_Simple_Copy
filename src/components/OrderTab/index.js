
import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'actions';
import './OrderTab.scss';

const OrderTab = ({ keyword, setOrder }) => {
	const dispatch = useDispatch();

	const handleSetOrder = (e) => {
		if (keyword) {
			dispatch(
				getProducts({ keyword, order: e.target.className })
			);

			setOrder(e.target.className);
		}

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