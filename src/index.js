import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import FormTodo from './components/FormTodo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/formtodo',
    element: <FormTodo/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// npm i react-router-dom

