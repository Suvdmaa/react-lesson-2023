import { pool } from "../config/mysql-config.js";

export async function getProductCategory() {
  const [rows] = await pool.query(
    `select product_category_id as id, product_category_name, product_category_description from product_category `
  );
  return rows;
}

export async function addProductCategory(
  product_category_name,
  product_category_description
) {
  const query = `INSERT INTO product_category (product_category_name, product_category_description) VALUES (?,?)`;
  const [rows] = await pool.query(query, [
    product_category_name,
    product_category_description,
  ]);
  return rows;
}

export async function editProductCategory(id, productCatName, productCatDesc) {
  const query = `UPDATE product_category SET product_category_name='${productCatName}', product_category_description='${productCatDesc}' where product_category_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteProductCategory(id) {
  const query = `DELETE from product_category where product_category_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}
