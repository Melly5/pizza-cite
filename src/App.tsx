import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage/HomePage';

import './App.scss';
import { Layout } from '@components/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Layout>
  );
};
