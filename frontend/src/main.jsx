import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AdminPannel from './component/AdminPannel.jsx'
import Addproduct from './component/Addproduct.jsx'
import Viewproduct from './component/Viewproduct.jsx'
import Updateproduct from './component/Updateproduct.jsx'
// import ClientNavbar from './client/ClientNavbar.jsx'
import Home from './client/Home.jsx'
import ClientApp from '../ClientApp.jsx'
import Protected from './component/Protected.jsx'
import Adminlogin from './component/Adminlogin.jsx'
import Cart from './client/Cart.jsx'
// import UserSign from './client/UserSign.jsx'
import Clientlogin from './client/Clientlogin.jsx'
import UserSign from './client/UserSign.jsx'



const router = createBrowserRouter(createRoutesFromElements(

  // client home
  <>
    <Route path='/' element={<ClientApp />}>
      <Route path='' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/clientlogin' element={<Clientlogin />} />
      <Route path='/userSign' element={<UserSign />} />

    </Route>


    {/* admin pannel */}
    <Route path='/admin' element={<App />}>
       <Route path='' element={
        <Protected>
          <AdminPannel />
        </Protected>
      } />
      <Route path='/admin/addProduct' element={
        <Protected>
          <Addproduct />
        </Protected>
      } />
      <Route path='/admin/viewproduct/:id' element={<Viewproduct />} />
      <Route path='/admin/updateproduct/:id' element={<Updateproduct />} />
      <Route path='/admin/adminlogin' element={<Adminlogin />} />



    </Route>
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
