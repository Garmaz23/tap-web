//import all dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

//Configure ENV File & Require Connection File

dotenv.config({ path: "./config.env" });
require("./db/conn");

//3001
const port = process.env.PORT;

//Require Model
const Users = require("./models/userShema");

//This method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Reqistration
app.post("/register", async (req, res) => {
  try {
    //Get body or data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });
    //save method is used to create user or insert user
    //but before savig or inserting,pass will hash
    //after hash, it till save to db
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

//run server

app.listen(port, () => {
  console.log("Server is listening");
});
