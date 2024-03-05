const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postSchema = new schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  likes: {
    users: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  comments: {
    Comments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Comment",
      default: [],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
