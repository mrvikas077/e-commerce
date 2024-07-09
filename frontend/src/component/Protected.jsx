import React, { useContext } from "react";
import { Navigate } from 'react-router-dom'
import UserContaxt from "../contaxt/Usercontaxt";
export default function Protected({children}){
    let { pass } = useContext(UserContaxt)
    if(pass){
        return children
    }else{
        return <Navigate to ='/admin/adminlogin'/>
    }
}
