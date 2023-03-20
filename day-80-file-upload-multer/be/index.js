import express from "express";
import cors from "cors";
import multer from "multer";

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

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);
  response.json({ data: [] });
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
