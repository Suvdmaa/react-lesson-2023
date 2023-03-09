import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //   post: '3307',
  password: "",
  database: "ishop",
});
