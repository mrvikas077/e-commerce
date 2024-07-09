import React  from "react";

import { Outlet } from "react-router-dom";
import ClientNavbar from "./src/client/ClientNavbar";
import ContextProvider from "./src/contaxt/ContextProvider2";

export default function ClientApp(){
    return(
        <ContextProvider>
            <ClientNavbar/>
            <Outlet/>
        </ContextProvider>
    )
}