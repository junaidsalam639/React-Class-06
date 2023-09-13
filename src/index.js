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
import Practice from './components/Practice';
import Es6_Practice from './components/Es6_Practice/Es6_Practice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/formtodo',
    element: <FormTodo/>
  },
  {
    path: '/practice',
    element: <Practice/>
  },
  {
    path: '/Es6_Practice',
    element: <Es6_Practice/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// npm i react-router-dom

