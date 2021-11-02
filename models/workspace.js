const mongoose = require("mongoose");
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Workspace", workspaceSchema);
