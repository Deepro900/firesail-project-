import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import Fireseil from './Components/Navbar/Fireseil';
import ForCollection from './Components/Navbar/ForCollection';
import ForCreator from './Components/Navbar/ForCreator';
import EnterApps from './Components/Navbar/EnterApps';
import CollectWallate from './Components/Navbar/CollectWallate';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [

      {
        path: "/",
        element: <Fireseil />
      },
      {
        path: "/For Collection",
        element: <ForCollection />

      },
      {
        path: "/For Creator",
        element: <ForCreator />
      },
      {
        path: "/Enter Apps",
        element: <EnterApps />
      },
      {
        path: "Collect Wallate",
        element: <CollectWallate />
      }
    ]

  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
