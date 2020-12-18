import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import OrderTab from 'components/OrderTab';
import Product from 'components/Product';
import { getProducts } from 'actions';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const { products } = useSelector(state => state.app);
  
  const getProductsFromUrl = () => {
    const params = new URLSearchParams(location.search);
    
    dispatch(
      getProducts({ 
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
    <div className='container'>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <OrderTab />

      <div className='products-wrap'>
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
