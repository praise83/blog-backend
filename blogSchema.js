const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    description: String, 
    content: String,
    tags: [String],
    author: String,
    created_at: { type: Date, default: Date.now },
    timestamp: { type: Date, default: Date.now }, 
    state: { type: String, default: 'draft' }, 
    read_count: { type: Number, default: 0 }, 
    reading_time: String 
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

