import * as React from 'react';
import { ProductType } from 'store/app';
import classNames from 'classnames/bind';
import styles from './Product.scss';

type ProductProps = {
	product: ProductType;
}
const cx = classNames.bind(styles);

function Product ({ product }: ProductProps) {
	const { product_image, name, price } = product;	
	
	return (
		<div className={cx('product-wrap')}>
			<img src={product_image} alt={name}/>
			<div className={cx('detail')}>
				<p className={cx('name')}>{name}</p>
				<p className={cx('price')}>{price}원</p>
			</div>
		</div>
	)
}

export default Product;