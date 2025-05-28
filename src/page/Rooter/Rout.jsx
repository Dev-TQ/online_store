import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


import Home from '../HOME/Home';
import Create from '../Create/Create';
import App from '../../App';
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);

export default Router;