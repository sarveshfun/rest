const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const { db_opertion } = require("./sql.js");
const options = { origin: "http://localhost:3000" };
app.use(cors(options));
app.use(express.json());
app.post("/register", (req, res) => {
  const scheam = {
    name: req.body.fullName,
    phonenumber: req.body.phoneNumber,
    subject: req.body.courseType,
    password: req.body.password,
    email: req.body.email,
  };
  const data = Object.keys(scheam).map((item) => {
    return scheam[item];
  });
  const value = db_opertion(data);
  if (value == "success") {
    res.status(200).send({ status: value });
  } else {
    res.status(500).send({ status: "unsuccess" });
  }
});

app.listen(PORT, () => {
  console.log("port listen");
});
