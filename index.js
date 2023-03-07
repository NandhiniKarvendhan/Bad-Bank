var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", (req, res) => {
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

app.get("/account/all", (req, res) => {});

app.listen(3000, () => {
  console.log("Running on port 3000!");
});
