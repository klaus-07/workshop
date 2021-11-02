const mongoose = require("mongoose");
const todosSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["todo", "working", "testing"],
    default: "working",
  },
  workspace: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Workspace",
  },
  department: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Department",
  },
  list: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "List",
  },
});
module.exports = mongoose.model("todos", todosSchema);
