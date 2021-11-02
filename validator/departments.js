const Department = require("../models/departments");
const mongoose = require("mongoose");
const Workspace = require("../models/workspace");
const departmentValidator = async (req, res, next) => {
  const { departmentName, workspace } = req.body;
  if (mongoose.Types.ObjectId.isValid(workspace)) {
    const exists = await Workspace.findById(workspace);
    if (!exists) {
      return res.json("workspace is false please try again");
    } else {
      next();
    }
  } else {
    res.status(403).json({
      success: false,
      message: "workspace id is not proper",
      data: null,
    });
  }
};

module.exports = departmentValidator;
