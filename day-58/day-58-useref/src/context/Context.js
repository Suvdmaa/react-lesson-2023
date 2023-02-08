import { createContext } from "react";
import { useState } from "react";

const ComponentContext = createContext(null);

const ComponentContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? "100px" : "150px";

  return (
    <ComponentContext.Provider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponentContextProvider };
