
import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
	const { product_image, name, price } = product;	
	return (
		<div className='product-wrap'>
			<div>
				<img src={product_image} alt={name}/>
			</div>
			<div>
				<p className='name'>{name}</p>
				<p className='price'>{price}원</p>
			</div>
		</div>
	)
}

export default Product;