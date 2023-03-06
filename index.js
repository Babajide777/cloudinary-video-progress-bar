const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const formidable = require("express-formidable-v2");
const { videoUpload } = require("./controllers/UploadController");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  formidable({
    multiples: true,
  })
);

app.get("/", (req, res) => {
  res.send("Cloudinary Video Progress Bar Tutorial ");
});

app.post("/upload", videoUpload);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
