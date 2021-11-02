const express = require("express");
const route = require("express").Router();
const Todos = require("../models/todos");
const Workspace = require("../models/workspace");
const Department = require("../models/departments");
const todosValidator = require("../validator/todos");
route.get("/get-todos", async (req, res) => {
  const getTodos = await Todos.find()
    .populate("list")
    .populate("department")
    .populate("workspace");
  res.status(202).json(getTodos);
});

route.post("/create-todos", todosValidator, async (req, res) => {
  const { task, status, workspace, department, list } = req.body;

  const todos = await new Todos({
    task,
    status,
    workspace,
    department,
    list,
  }).save();
  const todosSave = await Todos.findById(todos._id)
    .populate("list")
    .populate("department")
    .populate("workspace")
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((Error) => {
      res.status(404).json(Error);
    });
});
route.post("/update-todos", async (req, res) => {
  const id = { _id: req.body.id };
  const update = req.body;
  const options = { new: true };
  const todoUpdate = await Todos.findByIdAndUpdate(
    id,
    update,
    options,
    (err, data) => {
      if (err) {
        res.status(505).json(err);
      } else {
        res.status(202).json(data);
      }
    }
  );
});

route.post("/delete-todos", async (req, res) => {
  const id = { _id: req.body.id };
  const delet = await Todos.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: "deleted",
        docs,
      });
    }
  });
});
module.exports = route;
