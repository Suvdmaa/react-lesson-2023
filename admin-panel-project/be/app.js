console.log("it it my app.js");
// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

// configuration of modules
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    phonenumber: body.phonenumber,
    email: body.email,
    rowradio: body.rowradio,
    disabled: body.disabled,
    avatar: body.avatar,
  };
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    console.log(readData);
    console.log(typeof readData);

    const dataObject = JSON.parse(readData); // object bolgodog

    dataObject.push(newUser);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
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

app.put("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {

    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.firstname = body.firstname),
          (d.lastname = body.lastname),
          (d.phonenumber = body.phonenumber),
          (d.email = body.email),
          (d.rowradio = body.rowradio),
          (d.disabled = body.disabled),
          (d.password = body.password),
          (d.avatar = body.avatar);
      }
      return d;
    });

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);

    const filteredObjects = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

/////////////////////////////////////////////////////////////////////////////////

app.get("/ecommerce", (request, response) => {
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/ecommerce", (request, response) => {
  const body = request.body;
  console.log(body);

  const newProduct = {
    id: Date.now().toString(),
    image: body.image,
    title: body.title,
    subtitle: body.subtitle,
    price: body.price,
    discount: body.discount,
    description1: body.description1,
    description2: body.description2,
    code: body.code,
    hashtag: body.hashtag,
    technology: body.technology,
    rating: body.rating,
  };
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    console.log(readData);
    console.log(typeof readData);

    const dataObject = JSON.parse(readData); // object bolgodog

    dataObject.push(newProduct);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
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

app.put("/ecommerce", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.image = body.image),
          (d.title = body.title),
          (d.subtitle = body.subtitle),
          (d.price = body.price),
          (d.discount = body.discount),
          (d.description1 = body.description1),
          (d.description2 = body.description2),
          (d.code = body.code),
          (d.hashtag = body.hashtag),
          (d.technology = body.technology),
          (d.rating = body.rating);
      }
      return d;
    });

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write erro",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.delete("/ecommerce", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);

    const filteredObjects = readObject.filter((o) => o.id !== body.productId);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
