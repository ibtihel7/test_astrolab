const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID, MongoClient } = require("mongodb");
const assert = require("assert");
const jwt = require("jsonwebtoken");
const app = express();
const SECRETKEY = "ibtihel";
app.use(bodyParser.json());

const MongoUrl = "mongodb://localhost:27017";
const database = "astrolab";


// login

const verifyTheToken = (req, res, next) => {
  // getting the token from the header
  const bearer = req.headers["authorization"];
  if (bearer) {
    const bearerToken = bearer.split(" ");
    const token = bearerToken[1];

    jwt.verify(token, SECRETKEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.userData = data;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

app.post("/login", (req, res) => {
  console.log("got the request");
  // check for the username and password
  console.log(req.body);
  const { username, password } = req.body;

  // database authenticate username and password
  if (username === "astrolab" && password === "astrolab") {
    const user = {
      username,
    };
    jwt.sign({ user }, SECRETKEY, (err, token) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          token,
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
});

MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err, "can not connect to database");
  const db = client.db(database);


 //add wishlist
 app.post("/add-wishlist", (req, res) => {
  let newwishlist = req.body;
  db.collection("wishlists").insertOne(newwishlist, (err, data) => {
    if (err) res.send("cant not add wishlist");
    else res.send(data);
  });
});
//get Products
app.get("/get-wishlists", (req, res) => {
  db.collection("wishlists")
    .find()
    .toArray((err, data) => {
      if (err) res.send("can not get wishlist");
      else res.send(data);
    });
});

  //add product
  app.post("/add-product", (req, res) => {
    let newproduct = req.body;
    db.collection("products").insertOne(newproduct, (err, data) => {
      if (err) res.send("cant not add product");
      else res.send(data);
    });
  });
  //get Products
  app.get("/get-products", (req, res) => {
    db.collection("products")
      .find()
      .toArray((err, data) => {
        if (err) res.send("can not get product");
        else res.send(data);
      });
  });
  //remove product
  app.delete("/delete-product/:id", (req, res) => {
    let id = ObjectID(req.params.id);
    db.collection("products").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) res.send("can not delete product");
      else res.send(data);
    });
  });
 
});

app.listen(3055, (err) => {
  assert.equal(null, err, "server not running");
  console.log("the server is running on port 3055");
});
