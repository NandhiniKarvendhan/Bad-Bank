var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", (req, res) => {
  dal.find(req.params.email).then((user) => {
    if (user.length > 0) {
      res.send("The user already exists, Email is already taken.");
    } else {
      dal
        .create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
          console.log(user);
          res.send(user);
        });
    }
  });
});
app.get("/account/find/:email", (req, res) => {
  dal.find(req.params.email).then((user) => {
    res.send(user);
  });
});
app.get("/account/login/:email/:password", (req, res) => {
  dal.find(req.params.email).then((user) => {
    if (user.length > 0) {
      if (user[0].password === req.params.password) {
        console.log(user);
        res.send("Login successful! Welcome back " + user[0].name + ".");
      } else {
        res.send("Login failed: wrong password");
      }
    } else {
      res.send("Login failed: Email not found.");
    }
  });
});
app.get("/account/update/:email/:amount", (req, res) => {
  var amount = Number(req.params.amount);
  dal.update(req.params.email, amount).then((response) => {
    res.send(response);
  });
});

app.get("/account/balance/:email", (req, res) => {
  dal.find(req.params.email).then((user) => {
    console.log(user);
    if (user.length > 0) {
      console.log(user.length);
      res.send(
        "Hi " + user[0].name + ". " + "Your balance is " + user[0].balance
      );
    } else {
      res.send("Check your email address.");
    }
  });
});
app.get("/account/all", (req, res) => {
  dal.all().then((user) => {
    console.log(user);
    res.send(user);
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000!");
});
const hello = () => "Hello World";
console.log(hello());
exports.hello = hello;
