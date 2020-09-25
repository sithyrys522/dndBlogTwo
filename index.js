/* eslint-disable no-console */
const express = require("express");
const app = express();
const port = 80;
const bodyParser = require("body-parser");
const path = require("path");
const favicon = require("serve-favicon");
const homeRouter = require("./routers/home");
const apiRouter = require("./routers/api");

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use("/", homeRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
