import express from "express";
import {
  addProductCategory,
  deleteProductCategory,
  editProductCategory,
  getProductCategory,
} from "../services/product-category-services.js";

const category_router = express.Router();

category_router.get("/product-category", async (request, response) => {
  const result = await getProductCategory();
  response.status(200).send(result);
});

category_router.post("/product-category", async (request, response) => {
  const { product_category_name, product_category_description } = request.body;
  const result = await addProductCategory(
    product_category_name,
    product_category_description
  );
  response.status(200).send(result);
});

category_router.put("/product-category", async (request, response) => {
  const { id, productCatName, productCatDesc } = request.body;
  const result = await editProductCategory(id, productCatName, productCatDesc);
  response.status(200).send(result);
});

category_router.delete("/product-category", async (request, response) => {
  const body = request.body;
  const result = await deleteProductCategory(body.id);
  response.status(200).send(result);
});

export default category_router;
