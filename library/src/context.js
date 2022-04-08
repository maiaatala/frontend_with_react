import React, { usestate, useContext } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
