const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },
  snippet: {
    type: Schema.Types.ObjectId,
    ref: 'snippets',
    required: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("likes", LikeSchema);
