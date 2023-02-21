import React from 'react';
import { Categories } from '@components/Categories/Categories';
import './PizzasPage.scss';

export const PizzasPage = () => {
  const [categoryId, setCategoryId] = React.useState<any>(0);
  const categoryNames = ['new', 'spicy', 'vegeterian'];
  console.log(categoryNames[categoryId]);

  return (
    <div className='pizzas-wrapper'>
      <p>Выбрать пиццу</p>
      <Categories
        value={categoryId}
        onClickCategory={(id: number) => {
          setCategoryId(id);
        }}
      />
      <div className='pizzas-items'></div>
    </div>
  );
};
