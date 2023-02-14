console.log("Day - 62 - User Login Crud");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

//API user register
app.get("/register", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file doest not exist",
        data: [],
      });
    }

    console.log(readData);

    const dataObject = JSON.parse(readData);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userData = {
        ...body,
        role: roleName,
      };

      dataObject.push(userData);

      // fs write
      fs.writeFile(
        "./data/users.json",
        JSON.stringify(dataObject),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "Error durrong file write",
              data: [],
            });
          }
          response.json({
            status: "success",
            data: dataObject,
          });
        }
      );
    });
  });
});

// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
