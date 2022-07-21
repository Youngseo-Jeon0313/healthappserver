const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Schema.Types.String.checkRequired(value => value !=null);

const diarySchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    date: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Diary', diarySchema);