import {createContext, useState} from "react";
export const ContextList = createContext();

export const ContextProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("");
  

  const values = {
    searchTerm,
    setSearchTerm,

  };
  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};
