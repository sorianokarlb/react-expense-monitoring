import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store.js';
import { Provider } from 'react-redux';
import {NextUIProvider} from "@nextui-org/react";
import App from './App.jsx'
import './assets/index.css'
import Login from './views/Login.jsx';
import Register from './views/Registration.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Login />} />
      <Route index={false} path='/register' element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </React.StrictMode>
  </Provider>
  
)
