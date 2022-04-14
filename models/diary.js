const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const diarySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Diary', diarySchema);