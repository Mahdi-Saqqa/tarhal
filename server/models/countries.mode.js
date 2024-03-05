const mongoose = require("mongoose");
const schema = mongoose.Schema;
const countrySchema = new schema({
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
  code: {
    type: String,
    required: true,
  },
});
