import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(
    `select user_role_id as id, user_role_name from user_role`
  );
  console.log(rows);
  return rows;
}

export async function updateUserRole() {
  const query = `UPDATE user_role SET user_role_name='${userRoleName}' where user_role_id=${userRoleId}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function addUserRole() {
  const query = `INSERT INTO user_role VALUES(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}

export async function deleteUserRole() {
  const query = `DELETE from user_role where user_role_id=${userRoleId}`;
  const [rows] = await pool.query(query);
  return rows;
}
