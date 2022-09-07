const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const articles = mongoose.model("articles", articleSchema);
module.exports = articles;
