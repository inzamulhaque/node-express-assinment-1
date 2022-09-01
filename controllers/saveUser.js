const fs = require("fs");

const saveUser = (req, res) => {
  const newData = req.body;
  const error = req.error;
  if (error) {
    res.send("error");
  } else {
    fs.readFile("./database/database.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        const myData = JSON.stringify([...JSON.parse(data), newData]);
        fs.writeFile("./database/database.json", myData, (error) => {
          if (error) {
            res.status(500).json({ message: "internal error" });
          } else {
            res.status(200).json({ message: "user created" });
          }
        });
      }
    });
  }
};

module.exports = saveUser;
