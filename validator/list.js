const Workspace = require("../models/workspace");
const Department = require("../models/departments");
const mongoose = require("mongoose");

const listValidator = async (req, res, next) => {
  const { listName, workspace, department } = req.body;
  if (mongoose.Types.ObjectId.isValid(workspace, department)) {
    const exists = await Workspace.findById(workspace);
    if (!exists) {
      return res.json("workspace is false please try again");
    }
    const departmentexists = await Department.findById(department);
    if (!departmentexists) {
      return res.json("department is false please try again");
    } else {
      next();
    }
  } else {
    res.status(403).json({
      success: false,
      message: "workspace and department id is not proper",
      data: null,
    });
  }
};
module.exports = listValidator;
