import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";

const app = express();
const PORT = 8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("<h1>Day-80 File Upload Multer</h1>");
});

app.get("/files", async (request, response) => {
  const testFolder = "./uploads/";
  const img = [];
  fs.readdirSync(testFolder).forEach((file) => {
    const imgUrl = `http://localhost:8080/uploads/${file}`;
    img.push(imgUrl);
  });
  response.status(200).json({ data: img });
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);
  const img = [];
  fs.readdirSync("./uploads/").forEach((file) => {
    console.log(file);
    const fileUrl = `http://localhost:8080/uploads/${file}`;
    img.push(fileUrl);
  });

  response.json({
    data: img,
  });
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
