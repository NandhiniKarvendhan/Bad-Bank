var express = require("express");
var app = express();
var cors = require("cors");

// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const email = req.params.email;
  const password = req.params.password;
  res.send({ name, email, password, balance: 0 });
});

app.listen(3000, () => {
  console.log("Running on port 3000!");
});
