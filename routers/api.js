const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const articleModel = require("../models/articles");

mongoose.connect("mongodb://localhost:27017/articles", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.use(bodyParser.json());

router.get("/articles", async (req, res) => {
  const articles = await articleModel.find({});

  try {
    res.send(articles);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/articles", async (req, res) => {
  const article = new articleModel(req.body);

  try {
    await article.save();
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/article/:id", async (req, res) => {
  const article = await articleModel.findById(req.params.id);

  try {
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
