const express = require("express");
const route = require("express").Router();
const Workspace = require("../models/workspace");
route.get("/get", async (req, res) => {
  const get = await Workspace.find();
  res.status(201).json(get);
});
route.post("/", async (req, res) => {
  const { name } = req.body;
  const work = await new Workspace({
    name,
  })

    .save()

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
