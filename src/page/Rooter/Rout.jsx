import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../HOME/Home';
import Create from '../Create/Create';
import App from '../../App';
import CallUs from 'page/Call/Call_us';
import About from 'page/About/About';
import InfoProducts from 'page/Products/InfoProducts';
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="CallUs" element={<CallUs />} />
      <Route path="About" element={<About />} />
      <Route path="InfoProducts" element={<InfoProducts />} />
    </Route>
  )
);
export default Router;
