var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const admin = require("./config/firebase-config");

// used to serve static files from build directory
app.use(express.static("../client/build"));
app.use(cors());

// To create account
app.get("/account/create/:name/:email/:password", (req, res) => {
  const idToken = req.headers.authorization;
  console.log("header:", idToken);

  if (!idToken) {
    res.status(401).send();
    return;
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
    })
    .catch(function (error) {
      console.log("error:", error);
      res.status(401).send("Token invalid!");
    });

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
// app.get("/account/find/:email", (req, res) => {
//   dal.find(req.params.email).then((user) => {
//     res.send(user);
//   });
// });

// delete the account
app.get("/account/remove/:email", (req, res) => {
  dal.remove(req.params.email).then((user) => {
    res.send(`Hi ${req.params.email}. Your account is deleted!`);
  });
});

// To login with email and password
app.get("/account/login/:email/:password", (req, res) => {
  const idToken = req.headers.authorization;
  // console.log("header:", idToken);

  if (!idToken) {
    res.status(401).send();
    return;
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
    })
    .catch(function (error) {
      console.log("error:", error);
      res.status(401).send("Token invalid!");
    });

  dal.find(req.params.email).then((user) => {
    if (user.length > 0) {
      if (user[0].password === req.params.password) {
        res.send("Login successful! Welcome back " + user[0].name + ".");
      } else {
        res.send("Login failed: wrong password");
      }
    } else {
      res.send("Login failed: Email not found.");
    }
  });
});

// Google login
app.get("/account/googleLogin/:name/:email/:password", (req, res) => {
  const idToken = req.headers.authorization;
  console.log("header:", idToken);

  if (!idToken) {
    res.status(401).send();
    return;
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
    })
    .catch(function (error) {
      console.log("error:", error);
      res.status(401).send("Token invalid!");
    });

  dal.find(req.params.email).then((user) => {
    if (user.length > 0) {
      // res.send("The user already exists, Email is already taken.");
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

// Deposit or withdraw amount
app.get("/account/update/:email/:amount", (req, res) => {
  var amount = Number(req.params.amount);
  dal.update(req.params.email, amount).then((response) => {
    res.send(`Your balance is updated by ${req.params.amount}.`);
  });
});

// Check balance
app.get("/account/balance/:email", (req, res) => {
  dal.find(req.params.email).then((user) => {
    console.log(user);
    if (user.length > 0) {
      res.send(
        "Hi " + user[0].name + ". " + "Your balance is " + user[0].balance
      );
    } else {
      res.send("Check your email address.");
    }
  });
});

// To get data of logined user
app.get("/account/:email", (req, res) => {
  dal.find(req.params.email).then((user) => {
    if (user.length > 0) {
      res.send(user);
    } else {
      res.send("Check your email address.");
    }
  });
});

// // To get all data
// app.get("/account/all", (req, res) => {
//   dal.all().then((user) => {
//     console.log(user);
//     res.send(user);
//   });
// });
app.listen(3000, () => {
  console.log("Running on port " + 3000 + "!");
});
