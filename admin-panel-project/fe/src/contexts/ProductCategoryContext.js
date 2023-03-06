import { createContext, useState } from "react";

const ProductCateContext = createContext(null);

const ProductCateContextProvider = ({ children }) => {
  const [productCate, setProductCate] = useState([]);
  const URL = "http://localhost:8080/product-category";

  return (
    <ProductCateContext.Provider value={{ productCate, setProductCate, URL }}>
      {children}
    </ProductCateContext.Provider>
  );
};

export { ProductCateContext, ProductCateContextProvider };
