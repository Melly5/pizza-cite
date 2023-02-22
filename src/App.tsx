import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '@components/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { PizzasPage } from '@pages/PizzasPage/PizzasPage';
import { CartPage } from '@pages/CartPage/CartPage';

import './App.scss';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/pizzas' element={<PizzasPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </Layout>
  );
};
