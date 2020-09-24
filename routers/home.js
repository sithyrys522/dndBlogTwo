const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleModel = require("../models/articles");

mongoose.connect("mongodb://localhost:27017/articles", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.use(bodyParser.json());

router.get("/", (req, res) => {
  articleModel
    .find({})
    .sort("-dateSubmitted")
    .then((data) => {
      res.render("index", { articles: data });
    });
});

router.get("/articles/:article", (req, res) => {
  articleModel.findOne({ title: req.params["article"] }).then((article) => {
    res.render("Article-layout", {
      article: article,
    });
  });
});

router.get("/bios/:bio", (req, res) => {
  res.render("Bios", { bio: req.params.bio });
});

module.exports = router;
