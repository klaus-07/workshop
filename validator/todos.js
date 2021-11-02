const Todos = require("../models/todos");
const Workspace = require("../models/workspace");
const Department = require("../models/departments");
const List = require("../models/list");
const mongoose = require("mongoose");
const listValidator = require("./list");

const todosValidator = async (req, res, next) => {
  const { task, status, workspace, department, list } = req.body;
  if (mongoose.Types.ObjectId.isValid(workspace, department, list)) {
    const exists = await Workspace.findById(workspace);
    if (!exists) {
      return res.json("workspace is false please try again");
    }
    const departmentexists = await Department.findById(department);
    if (!departmentexists) {
      return res.json("department is false please try again");
    }
    const listexists = await List.findById(list);
    if (!listexists) {
      return res.json("list is false please try again");
    } else {
      next();
    }
  } else {
    res.status(403).json({
      success: false,
      message: "`workspace , department , list` id is not proper",
      data: null,
    });
  }
};
module.exports = todosValidator;
