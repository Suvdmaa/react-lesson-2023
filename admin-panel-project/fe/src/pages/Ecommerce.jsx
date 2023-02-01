import * as React from "react";
import EcommerceTable from "../components/EcommerceTable";

export default function Ecommerce({ products, setProducts }) {
  return (
    <div>
      <h1>Products</h1>
      <EcommerceTable products={products} setProducts={setProducts} />
    </div>
  );
}
