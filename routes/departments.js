const express = require("express");
const mongoose = require("mongoose");
const route = require("express").Router();
const Department = require("../models/departments");
const Workspace = require("../models/workspace");
const departmentValidator = require("../validator/departments");

route.get("/getdept", async (req, res) => {
  const dept = await Department.find().populate("workspace");
  res.status(202).json(dept);
});
route.post("/create", departmentValidator, async (req, res) => {
  const { departmentName, workspace } = req.body;

  const department = await new Department({
    departmentName,
    workspace,
  }).save();
  const savedDept = await Department.findById(department._id)
    .populate("workspace")
    .then((result) => {
      res.status(201).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(501).json(err);
    });
});
module.exports = route;
