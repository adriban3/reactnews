const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, reqruired: true },
    author: { type: String, required: true },
    url: { type: String, required: true }
})

const article = mongoose.model("nytreact", articleSchema);

module.exports = article;