const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FanSchema = new Schema({
  fan: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    index: true,
  },
  idol: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("fans", FanSchema);
