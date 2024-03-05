const mongoose = require("mongoose");

const schema = mongoose.Schema;
const communitySchema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  members: {
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
  posts: {
    Posts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Post",
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
communitySchema.index({ name: "text", description: "text" });
module.exports = mongoose.model("Community", communitySchema);
