import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Registration from './components/Registration/Registration.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Oders from './components/Oders/Oders.jsx';
import PrivateRoutus from './components/routes/PrivateRoutus.jsx';
import Profile from './components/Profile/Profile.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'registration',
        Component: Registration,
      },
      {
        path: 'orders',
        element: (
          <PrivateRoutus>
            <Oders />
          </PrivateRoutus>
        ),
      }, {
        
        path: 'profile',
        element: <PrivateRoutus><Profile/></PrivateRoutus>


      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
 <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
