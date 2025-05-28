import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './page/Rooter/Rout'; // مسار ملف الراوتر اللي انت عملته
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);