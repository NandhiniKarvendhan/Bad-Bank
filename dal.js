const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to bad-bank database
  db = client.db("bad-bank");
});

function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("accountHolders");
    const doc = { name, email, password, balance: 0 };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

function find(email) {
  return new Promise((resolve, reject) => {
    const customer = db
      .collection("accountHolders")
      .find({ email: email })
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}
function all() {
  return new Promise((resolve, reject) => {
    const holders = db.collection("accountHolders").find({});
    console.log(
      holders.toArray(function (err, result) {
        err ? reject(err) : resolve(result);
      })
    );
  });
}

module.exports = { create, find, all };
