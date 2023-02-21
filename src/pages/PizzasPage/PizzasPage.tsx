import React from 'react';
import { Categories } from '@components/Categories/Categories';
import './PizzasPage.scss';
import { PizzaItem } from '@components/PizzaItem/PizzaItem';
import { Service } from '@utils/api/requests';

export const PizzasPage = () => {
  const [categoryId, setCategoryId] = React.useState<any>(0);
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
          setCategoryId(id);
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
