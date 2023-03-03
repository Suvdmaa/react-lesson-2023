import express from "express";
import { addUserRole, getUserRole } from "../services/user-role-services.js";

const role_router = express.Router();

role_router.get("/user-roles", async (request, response) => {
  const result = await getUserRole();
  response.status(200).send(result);
});

// role_router.post("/user-role", async (request, response) => {
//   const { userRoleName } = request.body;
//   const result = await addUserRole(userRoleName);
//   response.status(200).send(result);
// });

// role_router.put("/user-role", async (request, response) => {
//   const { userRoleName } = request.body;
//   const result = await updateUserRole(userRoleName);
//   response.status(200).send(result);
// });

// role_router.delete("/user-role", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.userRoleId);
//   response.status(200).send(result);
// });

export default role_router;
