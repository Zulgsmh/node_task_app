require("dotenv").config();
//express to make requests
const express = require("express");
//access to db
require("./db/db");
//models
const User = require("./models/user");
const Task = require("./models/task");
//routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

//parse data automaticly
app.use(express.json());
//add all routers to our app
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server listening on port : " + port);
});
