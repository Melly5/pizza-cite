import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Service } from '@utils/api/requests';
import { Categories } from '@components/Categories/Categories';
import { PizzaItem } from '@components/PizzaItem/PizzaItem';
import { RootState } from '@redux/store';
import { setCategoryId } from '@redux/slices/filterSlice';

import './PizzasPage.scss';

export const PizzasPage = () => {
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const dispatch = useDispatch();

  const categoryNames = ['new', 'spicy', 'vegeterian'];
  const [data, setData] = React.useState([] as any);

  async function getPizza() {
    try {
      const response = await Service.getAll();
      setData(response.data);
      console.log(response, data);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className='pizzas-wrapper'>
      <p>Выбрать пиццу</p>
      <Categories
        value={categoryId}
        onClickCategory={(id: number) => {
          dispatch(setCategoryId(id));
        }}
      />
      <div className='pizzas-items'>
        {data?.map((pizza: any, idx: number) =>
          categoryId === 0 || categoryId === 4 ? (
            <PizzaItem key={idx} pizza={pizza} />
          ) : (
            Object.values(pizza.classifications)[categoryId - 1] === true && (
              <PizzaItem key={idx} pizza={pizza} />
            )
          )
        )}
      </div>
    </div>
  );
};
