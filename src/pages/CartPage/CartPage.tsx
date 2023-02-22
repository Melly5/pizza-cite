import React from 'react';

import { OrderList } from '@components/OrderList/OrderList';

import './CartPage.scss';

export const CartPage = () => {
  return (
    <div className='cart-wrapper'>
      <p className='article'>Оформить заказ</p>
      <section>
        <p className='title'>2 товара на 1398 ₽ </p>
        <OrderList />
      </section>
    </div>
  );
};
