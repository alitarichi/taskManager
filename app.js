const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);

//app.get('/api/v1/tasks')         -get all the tasks
//app.post('/api/v1/tasks')        -create a new task
//app.get('/api/v1/tasks/:id')     -get a single task
//app.patch('/api/v1/tasks/:id')   -update a task
//app.delete('/api/v1/tasks/:id')  -delete a task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
