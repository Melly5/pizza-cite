import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage/HomePage';

import './App.scss';
import { Layout } from '@components/Layout/Layout';
import { PizzasPage } from '@pages/PizzasPage/PizzasPage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/pizzas' element={<PizzasPage />}></Route>
      </Routes>
    </Layout>
  );
};
