import { createContext } from "react";
import { DATA } from "../data/data";

const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={DATA}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
