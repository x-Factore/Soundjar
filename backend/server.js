//Load env variables

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies

const express = require("express");
const cors = require("cors");
const connectedDb = require("./config/connectingDb");

//create an express app

const app = express();

//config express

app.use(express.json());

//connecting to database

connectedDb();

//Routing
app.get("/posts", postController.fetchPosts);
app.get("/posts/:id", postController.fetchPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:postId", postController.deletePost);

//start our server

app.listen(process.env.PORT);

