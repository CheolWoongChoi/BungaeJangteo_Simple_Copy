import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import OrderTab from 'components/OrderTab';
import Product from 'components/Product';
import './App.scss';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState('date');
  const { products } = useSelector(state => state.app);

  return (
    <div className='container'>
      <SearchBar keyword={keyword} order={order} setKeyword={setKeyword} />
      <OrderTab keyword={keyword} order={order} setOrder={setOrder} />

      <div className='products-wrap'>
        {products.map(product => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
