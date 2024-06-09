
import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";
export  const AuthContext=createContext();
const App = () => {
 const [isChecked,setIsChecked]=useState(false);

  return (
    <AuthContext.Provider value={[isChecked,setIsChecked]}>
    <div>
       <Auth />
       {
        isChecked?<p className="authText">You ar now authenticated.You can proceed</p>:<p className="authText">you are not authenticated</p>
       }
      
    </div>
    </AuthContext.Provider>
  )
}

export default App
