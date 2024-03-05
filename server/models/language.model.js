const mongoose = require("mongoose");
const schema = mongoose.Schema;
const languageSchema = new schema({
  name: {
    type: String,
    required: true,
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
});
languageSchema.index({ name: "text" });
module.exports = mongoose.model("Language", languageSchema);
