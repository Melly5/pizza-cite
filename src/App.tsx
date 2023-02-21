import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage/HomePage';

import './App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  );
};
