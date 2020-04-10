const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    index: true,
  },
  snippet: {
    type: Schema.Types.ObjectId,
    ref: "snippets",
    required: true,
    index: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "comments",
    index: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
