console.log("Day - 62 - User Login Crud");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

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

// API Login
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const usersArrayObject = JSON.parse(readData);

    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    } else {
      //hervee hereglegch oldson bol
      const foundUserObj = foundUser[0];
      console.log(foundUserObj);
      const plainPassword = body.password;
      const savedPaswword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPaswword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "Username or password do not match",
              data: [],
            });
          }
          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstname: foundUserObj.firstname,
                lastname: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

//API get all user
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

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
            data: [],
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          console.log("hashed Data", hashData);
          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          dataObject.push(newUser);

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
