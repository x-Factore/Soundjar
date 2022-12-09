//Load env variables

   require("dotenv").config();


// Import dependencies

const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const connectedDb = require("./config/connectionDb");
const postController = require("./controllers/postController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requiredAuth");


//create an express app

const app = express();

//config express
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//connecting to database


//Routing


app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
// app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get("/posts", postController.fetchPosts);
app.get("/posts/:id", postController.fetchPost);
app.post("/posts",postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:postId", postController.deletePost);

//start our server

app.listen(process.env.PORT ,function(){
  console.log(`server run on http://localhost:${process.env.PORT}`);
});
