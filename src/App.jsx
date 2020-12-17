import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import OrderTab from 'components/OrderTab';
import Product from 'components/Product';
import './App.scss';

const App = () => {
  const { productList } = useSelector(state => state.app);

  return (
    <div className='container'>
      <SearchBar />
      <OrderTab />
      <div className='products-wrap'>
        {productList.map(product => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
