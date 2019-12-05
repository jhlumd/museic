const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },
  aws_url: {
    type: String,
    required: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Likes = mongoose.model("photos", PhotoSchema);