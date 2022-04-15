const mongoose = require('mongoose');
const diary = require('./diary');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  diaries:{
      writes:[
        {
            type:Schema.Types.ObjectId,
            ref:'Diary',
            required:true
        }
      ]
  }
})


module.exports = mongoose.model('User', userSchema);