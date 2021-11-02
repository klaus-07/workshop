const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const workSpaceRouter = require("./routes/workspace");
const departmentRouter = require("./routes/departments");
const listRouter = require("./routes/list");
const todosRouter = require("./routes/todos");
mongoose.connect(
  "mongodb://127.0.0.1:27017/secondApi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected")
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/workspace/api", workSpaceRouter);
app.use("/department/api", departmentRouter);
app.use("/list/api", listRouter);
app.use("/todos/api", todosRouter);
app.listen(4000);
