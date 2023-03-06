import { createContext, useState } from "react";

const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:8080/products";

  return (
    <ProductsContext.Provider value={{ products, setProducts, URL }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
