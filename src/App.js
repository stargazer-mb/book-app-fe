import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import View from './pages/view';
import Update from './pages/update';
import Add from './pages/add';

const router = createBrowserRouter([
  {
    path: '/',
    element: <View />,
  },
  {
    path: '/update/:id',
    element: <Update />,
  },
  {
    path: '/add',
    element: <Add />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
