import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '@redux/store';

import './Header.scss';

export const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <div className='header-wrapper'>
      <p className='name'>SANTORINIZ</p>
      <img className='image' src='/files/header/pepper.png' alt='pepper' width={150} height={90} />
      <div className='variants'>
        <Link className='link' to='/'>
          <p>Главная</p>
        </Link>
        <Link className='link' to='/pizzas'>
          <p>Выбрать пиццу</p>
        </Link>
        <Link className='link' to='/cart'>
          <p>Оформить заказ({items.length})</p>
        </Link>
      </div>
    </div>
  );
};
