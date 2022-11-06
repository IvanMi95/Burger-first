import { createContext, useState } from "react";
const Appcontext = createContext(null)

export const Context = ({ children }) => {



  const value =''
  return (<div>
    <Appcontext.Provider value={value}>
      {children}
    </Appcontext.Provider>
  </div>);
}

export default Appcontext;