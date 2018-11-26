const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const PostSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    body:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        name: String,
        required: false
    }
});

PostSchema.plugin(timestamp);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;