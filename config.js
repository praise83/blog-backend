const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/blog-api");
        await mongoose.connect("mongodb+srv://admin:admin@blog.tycu8qj.mongodb.net/?retryWrites=true&w=majority&appName=blog");
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

