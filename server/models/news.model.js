const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsModel = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("news", newsModel);