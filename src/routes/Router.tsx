import React from 'react';
import {Route, Routes} from 'react-router-dom';

import ProductListPage from "../pages/ProductListPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductListPage/>}/>
    </Routes>
  );
}

export default Router;
