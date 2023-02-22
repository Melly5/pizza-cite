import React from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '@redux/slices/cartSlice';

import './PizzaItem.scss';

export const PizzaItem = ({ pizza }: any) => {
  const dispatch = useDispatch();

  return (
    <div className='pizza-item-wrapper'>
      <img className='image' src={pizza.img} alt='pizza' />
      <div className='name'>
        <h4 className='title'>{pizza.name}</h4>
        <div>{pizza.price.size.medium} см</div>
      </div>
      <div className='ingredients'>
        {pizza.ingredients.map((ingredient: string, id: number) => (
          <>{ingredient}, </>
        ))}
      </div>
      <div className='bottom'>
        <div className='price'>{pizza.price.default} ₽</div>
        <button className='button active' onClick={() => dispatch(addItem(pizza))}>
          Добавить
        </button>
      </div>
    </div>
  );
};
