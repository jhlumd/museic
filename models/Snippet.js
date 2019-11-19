const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SnippetSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Awesome snippet!'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  public: {
    type: Boolean,
    default: true
  },
  notes: {
    rtpe: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("snippets", SnippetSchema);
