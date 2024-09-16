

const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", BlogSchema);
