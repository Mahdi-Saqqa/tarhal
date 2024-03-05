const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "moderator", "admin"],
      default: "user",
    },
    location: {
      isPublic: {
        type: Boolean,
        default: true,
      },
      country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      timezone: {
        name: {
          type: String,
          default: "",
        },
        offset: {
          type: int,
          default: 0,
        },
      },
    },

    followers: {
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },

    following: {
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },
    communities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.index({ username: "text", name: "text" });
const User = mongoose.model("User", userSchema);
module.exports = User;
