import express, { application } from "express";
const apiRouter = express.Router();
// import {
//   getEmployees,
//   hireEmployee,
//   getMaxNo,
//   fireEmployee,
//   updateEmployee,
// } from "../services/employee-services.js";
import { getPopularCategories } from "../services/category-services.js";
import {
  getChildrenMenus,
  getParentMenus,
} from "../services/menus-services.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();
  console.log(parentMenus);

  const result = await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(result);
});
export default apiRouter;
