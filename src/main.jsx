import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/authProvider';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </StrictMode>,
)
