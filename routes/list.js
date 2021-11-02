const express = require("express");
const route = require("express").Router();

const List = require("../models/list");
const listValidator = require("../validator/list");

route.get("/get-list", async (req, res) => {
  const getData = await List.find()
    .populate("workspace")
    .populate("department");
  res.status(202).json(getData);
});

route.post("/create-list", listValidator, async (req, res) => {
  const { listName, workspace, department } = req.body;

  const listData = await new List({
    listName,
    workspace,
    department,
  }).save();

  const savedList = await List.findById(listData._id)
    .select("listName workspace department ")
    .populate("workspace")
    .populate("department")
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
