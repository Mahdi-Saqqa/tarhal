const mongoose = require('mongoose');
const schema = mongoose.Schema;
const commentSchema = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes:{
        users:{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User',
            default: [],
        },
        count:{
            type: Number,
            default: 0,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });
module.exports = mongoose.model('Comment', commentSchema);