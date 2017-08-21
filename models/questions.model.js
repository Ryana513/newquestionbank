const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("questions", questionSchema);
