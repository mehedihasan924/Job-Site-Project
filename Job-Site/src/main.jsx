import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applied from './Component/Applied/Applied.jsx'
import Blogs from './Component/Blogs/Blogs.jsx'
import JobsDetails from './Component/JobsDetails/JobsDetails.jsx'
import CartProductloader from './CartProductLoader/CartProductloader.js'
import AuthProvaiders from './Component/Provider/AuthProviders.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App/>,
        loader:()=>fetch(`http://localhost:3000/jobsDetails`)

      },
      {
        path: "/applied",
        element: < Applied/>,
        loader:CartProductloader
      },
      {
        path: "/blogs",
        element:< Blogs/>,
      },
      {
        path: "/JobsDetails/:id",
        element: < JobsDetails/>,
        loader:({params})=>fetch(`http://localhost:3000/jobsDetails/${params.id}`)
      },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaiders>
        <RouterProvider router={router} />
    </AuthProvaiders> 
  </React.StrictMode>,
);
