import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
} from "../services/users-services.js";

const user_router = express.Router();

user_router.get("/users", async (request, response) => {
  const result = await getUsers();
  response.status(200).send(result);
});

user_router.post("/users", async (request, response) => {
  const {
    firstname,
    lastname,
    email,
    birthDate,
    phonenumber,
    address,
    user_role_id,
  } = request.body;
  const result = await addUser(
    firstname,
    lastname,
    email,
    birthDate,
    phonenumber,
    address,
    user_role_id
  );
  response.status(200).send(result);
});

user_router.put("/users", async (request, response) => {
  const {
    id,
    first_name,
    last_name,
    birth_date,
    email,
    phone_number,
    address,
    user_role_id,
  } = request.body;
  const result = await editUser(
    id,
    first_name,
    last_name,
    birth_date,
    email,
    phone_number,
    address,
    user_role_id
  );
  response.status(200).send(result);
});

user_router.delete("/users", async (request, response) => {
  const body = request.body;
  const result = await deleteUser(body.id);
  response.status(200).send(result);
});

export default user_router;
