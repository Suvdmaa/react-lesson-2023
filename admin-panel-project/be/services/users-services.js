import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(
    `select user_id as id , first_name, last_name, birth_date, email , phone_number, address, user_role_id from user`
  );
  return rows;
}

export async function addUser(
  firstname,
  lastname,
  email,
  birthDate,
  phonenumber,
  address,
  user_role_id
) {
  const query = `INSERT INTO user (first_name, last_name, email, birth_date,  phone_number, address, user_role_id) VALUES (?, ?, ?, ? ,?, ?, ?)`;
  const [rows] = await pool.query(query, [
    firstname,
    lastname,
    email,
    birthDate,
    phonenumber,
    address,
    user_role_id,
  ]);
  return rows;
}

export async function editUser(
  id,
  first_name,
  last_name,
  birth_date,
  email,
  phone_number,
  address,
  user_role_id
) {
  const query = `UPDATE user SET first_name='${first_name}', last_name='${last_name}', birth_date='${birth_date}', email='${email}', phone_number='${phone_number}', address='${address}', user_role_id='${user_role_id}' where user_id=${id} `;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteUser(id) {
  const query = `DELETE from user where user_id=${id}`;
  const [rows] = await pool.query(query);
  return rows;
}
