require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const path = require('path');

const app = express();

app.use(cors());
app.use("/public", express.static(path.join(__dirname, '..','public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

module.exports = app;
