/* eslint-disable no-console */
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");
const favicon = require("serve-favicon");

/* Creating an array of article data
Using Nodes built in filesystem module and cheerio the program
will go through the articles directory and read each file. Since
the article files are built a specific way this program can read through
each file and pull out relevant data to aid in creating an array of a
title, content, and post number for each article. */
const articleDir = path.join(__dirname, "views/articles/");
const articles = [];
// eslint-disable-next-line consistent-return
fs.readdir(articleDir, (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => {
    fs.readFile(articleDir + file, "utf8", (error, data) => {
      if (error) {
        console.error(error);
        return;
      }
      const $ = cheerio.load(data);
      const post = {
        title: $("h2").text(),
        content: $("p").text(),
        number: $("#post-number").text(),
        date: $("h3").text(),
      };
      articles.splice(post.number - 1, 0, post);
      // This puts the articles in a specific order to help with structuring the web page later
    });
  });
});

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.get("/", (req, res) => {
  res.render("index", { articles });
});

app.get("/articles/:id", (req, res) => {
  res.render("Article-layout", { id: req.params.id });
});

app.get("/bios/:bio", (req, res) => {
  res.render("Bios", { bio: req.params.bio });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost${port}`);
});
