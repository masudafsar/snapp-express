import React from 'react';
import {Route, Routes} from 'react-router-dom';

import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:vendor/' element={<ProductListPage/>}/>
      <Route path='/:vendor/:catId/' element={<ProductListPage/>}/>
    </Routes>
  );
}

export default Router;
