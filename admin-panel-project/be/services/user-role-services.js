import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(
    `select user_role_id as id, user_role_name from user_role`
  );
  console.log(rows);
  return rows;
}

export async function addUserRole(userRoleName) {
  const query = `INSERT INTO user_role (user_role_name) VALUES(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}

export async function updateUserRole(userRoleName, id) {
  const query = `UPDATE user_role SET user_role_name='${userRoleName}' where user_role_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteUserRole(userRoleId) {
  const query = `DELETE from user_role where user_role_id=${userRoleId}`;
  const [rows] = await pool.query(query);
  return rows;
}
