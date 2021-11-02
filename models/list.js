const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
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
});
module.exports = mongoose.model("List", listSchema);
