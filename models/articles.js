const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dateSubmitted: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
