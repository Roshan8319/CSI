import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Navigate, useLocation } from 'react-router-dom'
import './App.css'
import App from './App.jsx'

import {SignIn} from './Components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<h1>Page not found</h1>}>
      <Route path='/' element={<SignIn />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
