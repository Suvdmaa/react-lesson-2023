import express from "express";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../services/product-services.js";
const product_router = express.Router();

product_router.get("/products", async (request, response) => {
  const result = await getProducts();
  response.status(200).send(result);
});

product_router.post("/products", async (request, response) => {
  const { image, title, price, quantity, description, categoryId } =
    request.body;
  const result = await addProduct(
    image,
    title,
    price,
    quantity,
    description,
    categoryId
  );
  response.status(200).send(result);
});

product_router.put("/products", async (request, response) => {
  const { id, image, title, price, quantity, description, categoryId } =
    request.body;
  const result = await editProduct(
    id,
    image,
    title,
    price,
    quantity,
    description,
    categoryId
  );
  response.status(200).send(result);
});

product_router.delete("/products", async (request, response) => {
  const body = request.body;
  const result = await deleteProduct(body.id);
  response.status(200).send(result);
});

export default product_router;
