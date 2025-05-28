
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      {/* هذا يعرض المكونات الفرعية حسب الراوتر */}
      <Outlet />
    </div>
  );
}

export default App;

