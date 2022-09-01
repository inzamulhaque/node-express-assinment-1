const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
