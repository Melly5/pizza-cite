import { RootState } from '@redux/store';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './OrderList.scss';

export const OrderList = () => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className='orderlist-wrapper'>
      {items.map((item) => (
        <div className='order-item' key={item.id}>
          <div>
            <img src={item.img} width={150} height={150} alt='pizza' />
            <div className='item-info'>
              <p style={{ fontSize: '22px', fontWeight: '600' }}>{item.name}</p>
              <p style={{ fontSize: '18px' }}>Средняя, 100см. Традиционное тесто</p>
            </div>
            <p className='price'>{item.price.default} ₽</p>
          </div>

          <div>
            <div className='item-amount'>
              <img
                className='operators'
                src='/files/cartpage/minus.svg'
                width={10}
                height={13}
                style={{ margin: '0 19px 0 2px' }}
                alt='minus'
              />
              <div>1</div>
              <img
                className='operators'
                src='/files/cartpage/plus.svg'
                width={17}
                height={17}
                style={{ marginLeft: '18px' }}
                alt='plus'
              />
            </div>
            <div className=''>
              <img
                src='/files/cartpage/delete.svg'
                width={20}
                height={20}
                style={{ marginRight: '10px' }}
                alt='delete'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
