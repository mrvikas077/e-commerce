import React from "react";
import Navbar from "./component/Navbar";
// import Admin from "./component/Admin";
import {Outlet} from 'react-router-dom'
import UserContaxt from "./contaxt/Usercontaxt";
import ContextProvider from "./contaxt/ContextProvider";
export default function App(){
  return  (
  <ContextProvider>
    <Navbar/>
    <Outlet/>
    
  </ContextProvider>
  )
}