import React, { useState } from "react";

import UserContaxt from "./Usercontaxt";

export default function ContextProvider({children}){
    let[count,setCount] = useState(false)
    let [login,setLogin] = useState('')
    return(
      <UserContaxt.Provider value={{count,setCount,login,setLogin}}>
{children}
      </UserContaxt.Provider>
    )
}