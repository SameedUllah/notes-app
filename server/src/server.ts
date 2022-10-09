import express from "express";
// import path from "path";
import fs from "fs";
const cors = require("cors");

const path = require("path");



const app = express();
const router = express.Router();
const port = 4000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());


app.get("/home", (req, res) => {
  // res.sendFile(path.join(__dirname, "public", "index.html"));

  // res.render("index");
  // res.send('hello')
  res.sendFile(path.resolve(".././client/public/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
