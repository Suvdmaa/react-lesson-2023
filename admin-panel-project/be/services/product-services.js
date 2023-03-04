import { pool } from "../config/mysql-config.js";

export async function getProducts() {
  const [rows] = await pool.query(
    `select product_id as id, product_name, product_description, product_price, product_quantity, product_category_id , image_path from product`
  );
  return rows;
}

export async function addProduct(
  image,
  title,
  price,
  quantity,
  description,
  categoryId
) {
  const query = `INSERT INTO product (image_path, product_name,  product_price, product_quantity, product_description, product_category_id) VALUES (?, ?, ?, ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    image,
    title,
    price,
    quantity,
    description,
    categoryId,
  ]);
  return rows;
}

export async function editProduct(
  id,
  image,
  title,
  price,
  quantity,
  description,
  categoryId
) {
  const query = `UPDATE product SET image_path='${image}', product_name='${title}', product_price='${price}', product_quantity='${quantity}', product_description='${description}',  product_category_id=${categoryId} where product_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteProduct(id) {
  const query = `DELETE from product where product_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}
