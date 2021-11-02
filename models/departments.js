const mongoose = require("mongoose");
const workspace = require("./workspace");
const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  workspace: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Workspace",
  },
});
module.exports = mongoose.model("Department", departmentSchema);
