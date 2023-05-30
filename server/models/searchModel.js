// here we set the model of the data from the DB

const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
    query: String, // name of the website (EX. Google)
    description: String, // short dis. about the site
    link: String // url to the website
})

module.exports = mongoose.model('entries', searchSchema);