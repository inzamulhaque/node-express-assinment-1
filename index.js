const express = require("express");
const fs = require("fs");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
