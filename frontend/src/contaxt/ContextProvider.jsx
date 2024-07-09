import React, { useState } from "react";
import UserContaxt from "./Usercontaxt";
export default function ContextProvider ({children}){
    let [pass,setPass]  = useState(false)

    return(
        <UserContaxt.Provider value = {{pass,setPass}}>
            {children}
        </UserContaxt.Provider>
        
    )
}