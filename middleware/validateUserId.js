const fs = require("fs");

const validateUserId = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    req.error = "error";
    res.status(400).json({ error: "please provide user id" });
    next();
  }

  fs.readFile("./database/database.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      req.error = "error";
      res.status(500).json({ error: "internal error" });
      next();
    } else {
      const myData = JSON.parse(data);
      const findUser = myData.find((user) => user.id == id);
      if (!findUser) {
        req.error = "error";
        res.status(404).json({ error: "user not found" });
        next();
      } else {
        req.user = findUser;
        next();
      }
    }
  });
};

module.exports = validateUserId;
