import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import OrderTab from 'components/OrderTab';
import Product from 'components/Product';
import { getProductsThunk } from 'store/app';
import { RootState } from 'store';
import classNames from 'classnames/bind';
import styles from './App.scss';

const cx = classNames.bind(styles);

function App() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const { products, suggests } = useSelector((state: RootState) => state.app);
  
  const getProductsFromUrl = () => {
    const params = new URLSearchParams(location.search);
    
    dispatch(
      getProductsThunk({ 
        keyword: params.get('q') || '', 
        order: params.get('order') || 'date'
      })
    );
  }

  useEffect(() => {
    getProductsFromUrl();
  }, []),

  window.onpopstate = () => {
    getProductsFromUrl();
  }

  return (
    <div className={cx('container')}>
      <SearchBar keyword={keyword} suggests={suggests} setKeyword={setKeyword} />
      <OrderTab />

      <div className={cx('products-wrap')}>
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
